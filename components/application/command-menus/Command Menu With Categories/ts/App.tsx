"use client";


import type {FC} from "react";


import {type ButtonProps, Card, CardBody, type Selection, Badge, Tooltip} from "@heroui/react";
import {Command} from "cmdk";
import {useEffect, useState, useMemo, useCallback, useRef} from "react";
import {matchSorter} from "match-sorter";
import {
  Button,
  Kbd,
  Link,
  Listbox,
  ListboxItem,
  Modal,
  ModalContent,
  ScrollShadow,
  cn,
  tv,
} from "@heroui/react";
import MultiRef from "react-multi-ref";
import scrollIntoView from "scroll-into-view-if-needed";
import {isAppleDevice, isWebKit} from "@react-aria/utils";
import {capitalize, intersectionBy, isEmpty} from "lodash";
import {useLocalStorage, useMediaQuery} from "usehooks-ts";
import {Icon} from "@iconify/react";


import {searchData} from "./mock-data";


import {useUpdateEffect} from "./use-update-effect";
import {CategoryEnum, type SearchResultItem} from "./data";
import {Popover, PopoverContent, PopoverTrigger} from "./popover";
import {sortSearchCategoryItems} from "./sort";
import {NewChip} from "./new-chip";


const cmdk = tv({
  slots: {
    base: "max-h-full h-auto",
    header: [
      "flex",
      "items-center",
      "w-full",
      "px-4",
      "border-b",
      "border-default-400/50",
      "dark:border-default-100",
    ],
    searchIcon: "text-default-400 text-lg [&>g]:stroke-[2px]",
    input: [
      "w-full",
      "px-2",
      "h-14",
      "font-sans",
      "text-lg",
      "outline-hidden",
      "rounded-none",
      "bg-transparent",
      "text-default-700",
      "placeholder-default-500",
      "dark:text-default-500",
      "dark:placeholder:text-default-300",
    ],
    listScroll: ["pt-2", "pr-4", "pb-6", "overflow-y-auto"],
    list: ["max-h-[50vh] sm:max-h-[40vh]"],
    listWrapper: ["flex", "flex-col", "gap-4", "pb-4"],
    itemWrapper: [
      "px-4",
      "mt-2",
      "group",
      "flex",
      "h-[54px]",
      "justify-between",
      "items-center",
      "rounded-lg",
      "shadow",
      "bg-content2/50",
      "active:opacity-70",
      "cursor-pointer",
      "transition-opacity",
      "data-[active=true]:bg-primary",
      "data-[active=true]:text-primary-foreground",
    ],
    leftWrapper: ["flex", "gap-3", "items-center", "w-full", "max-w-full"],
    leftWrapperOnMobile: ["flex", "gap-3", "items-center", "w-full", "max-w-[166px]"],
    rightWrapper: ["flex", "flex-row", "gap-2", "items-center"],
    leftIcon: [
      "text-default-500 dark:text-default-300",
      "group-data-[active=true]:text-primary-foreground",
    ],
    itemContent: ["flex", "flex-col", "gap-0", "justify-center", "max-w-[80%]"],
    itemParentTitle: [
      "text-default-400",
      "text-xs",
      "group-data-[active=true]:text-primary-foreground",
      "select-none",
    ],
    itemTitle: [
      "truncate",
      "text-default-500",
      "group-data-[active=true]:text-primary-foreground",
      "select-none",
    ],
    emptyWrapper: ["flex", "flex-col", "text-center", "items-center", "justify-center", "h-32"],
    sectionTitle: ["text-xs", "font-semibold", "leading-4", "text-default-900"],
    categoryItem: [
      "h-[50px]",
      "gap-3",
      "py-2",
      "bg-default-100/50",
      "text-medium",
      "text-default-500",
      "data-[hover=true]:bg-default-400/40",
      "data-[selected=true]:bg-default-400/40",
      "data-[selected=true]:text-white",
      "data-[selected=true]:focus:bg-default-400/40",
    ],
    groupItem: [
      "flex-none",
      "aspect-square",
      "rounded-large",
      "overflow-hidden",
      "cursor-pointer",
      "border-small",
      "h-[120px]",
      "w-[120px]",
      "border-white/10",
      "bg-black/20",
      "data-[active=true]:bg-white/5",
      "data-[active=true]:text-primary-foreground",
    ],
  },
});


const MATCH_KEYS = ["content", "group", "category"] as const;
const RECENT_SEARCHES_KEY = "recent-searches--heroui-pro";
const MAX_RECENT_SEARCHES = 10;
const MAX_RESULTS = 20;
const CATEGORY_ICON_MAP = {
  [CategoryEnum.APPLICATION]: "solar:layers-minimalistic-linear",
  [CategoryEnum.AI]: "solar:magic-stick-3-linear",
  [CategoryEnum.MARKETING]: "solar:graph-new-up-linear",
  [CategoryEnum.ECOMMERCE]: "solar:cart-large-minimalistic-linear",
  [CategoryEnum.CHARTS]: "solar:pie-chart-2-broken",
};
const CATEGORIES = [
  {
    key: CategoryEnum.APPLICATION,
    icon: CATEGORY_ICON_MAP[CategoryEnum.APPLICATION],
    label: "Application",
  },
  {
    key: CategoryEnum.AI,
    icon: CATEGORY_ICON_MAP[CategoryEnum.AI],
    label: "AI",
  },
  {
    key: CategoryEnum.MARKETING,
    icon: CATEGORY_ICON_MAP[CategoryEnum.MARKETING],
    label: "Marketing",
  },
  {
    key: CategoryEnum.ECOMMERCE,
    icon: CATEGORY_ICON_MAP[CategoryEnum.ECOMMERCE],
    label: "E-commerce",
  },
  {
    key: CategoryEnum.CHARTS,
    icon: CATEGORY_ICON_MAP[CategoryEnum.CHARTS],
    label: "Charts",
  },
] as const;


function flattenSearchData() {
  let flattened: SearchResultItem[] = [];


  Object.keys(searchData).forEach((key) => {
    let items = searchData[key as CategoryEnum] as SearchResultItem[];


    items = items.map((item) => {
      return {
        ...item,
        category: key,
      };
    });


    flattened = flattened.concat(items);
  });


  return flattened;
}


function groupedSearchData(data: SearchResultItem[]) {
  let categoryGroupMap = {
    [CategoryEnum.AI]: [] as SearchResultItem[],
    [CategoryEnum.APPLICATION]: [] as SearchResultItem[],
    [CategoryEnum.MARKETING]: [] as SearchResultItem[],
    [CategoryEnum.ECOMMERCE]: [] as SearchResultItem[],
    [CategoryEnum.CHARTS]: [] as SearchResultItem[],
  };


  data.forEach((item) => {
    if (item.category) {
      categoryGroupMap[item.category as CategoryEnum].push(item);
    }
  });


  return categoryGroupMap;
}


/**
 *  🚨 Important
 *
 *  This component requires installing the following packages:
 * `npm install cmdk usehooks-ts lodash @radix-ui/react-popover
 *  scroll-into-view-if-needed react-multi-ref match-sorter`
 *
 */
const Component: FC<{}> = () => {
  const [query, setQuery] = useState("");
  const [activeItem, setActiveItem] = useState(0);
  const [menuNodes] = useState(() => new MultiRef<number, HTMLElement>());
  const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(CategoryEnum.APPLICATION);
  const slots = useMemo(() => cmdk(), []);
  const flattenedData = useMemo(() => flattenSearchData(), []);
  const groupedData = useMemo(() => groupedSearchData(flattenedData), [flattenedData]);
  const eventRef = useRef<"mouse" | "keyboard">();
  const listRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [commandKey, setCommandKey] = useState<"ctrl" | "command">("command");


  useEffect(() => {
    setCommandKey(isAppleDevice() ? "command" : "ctrl");
  }, []);


  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);


  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);


  const handleOpenCmdk = useCallback(() => {
    onOpen();
  }, [onOpen]);


  const isMobile = useMediaQuery("(max-width: 650px)");


  const [savedRecentSearches, setRecentSearches] = useLocalStorage<SearchResultItem[]>(
    RECENT_SEARCHES_KEY,
    [],
  );


  const recentSearches = useMemo(() => {
    if (isEmpty(savedRecentSearches)) return [];


    return savedRecentSearches?.map((item) => {
      const found = searchData[item.category as CategoryEnum]?.find(
        (i) => i.slug === item.slug,
      ) as SearchResultItem;


      return {
        ...item,
        ...found,
      };
    });
  }, [savedRecentSearches]);


  const addToRecentSearches = useCallback(
    (item: SearchResultItem) => {
      let searches = recentSearches ?? [];


      // Avoid adding the same search again
      if (!searches.find((i) => i.slug === item.slug)) {
        setRecentSearches([item, ...searches].slice(0, MAX_RECENT_SEARCHES));
      } else {
        // Move the search to the top
        searches = searches.filter((i) => i.slug !== item.slug);
        setRecentSearches([item, ...searches].slice(0, MAX_RECENT_SEARCHES));
      }
    },
    [recentSearches, setRecentSearches],
  );


  const results = useMemo<SearchResultItem[]>(
    function getResults() {
      if (query.length < 2) return [];


      const data = flattenedData as SearchResultItem[];


      const words = query.split(" ");


      if (words.length === 1) {
        return matchSorter(data, query, {
          keys: MATCH_KEYS,
        }).slice(0, MAX_RESULTS);
      }


      const matchesForEachWord = words.map((word) =>
        matchSorter(data, word, {
          keys: MATCH_KEYS,
        }),
      );


      const matches = intersectionBy(...matchesForEachWord, "slug").slice(0, MAX_RESULTS);


      return matches;
    },
    [query, flattenedData],
  );


  const categoryGroups = useMemo(() => {
    let categoryGroups: {
      [key: string]: SearchResultItem[];
    } = {};


    const categorySearchItems = sortSearchCategoryItems(groupedData[selectedCategory]);


    categorySearchItems.forEach((item) => {
      if (!categoryGroups[item.group.key]) {
        categoryGroups[item.group.key] = [];
      }
      categoryGroups[item.group.key].push(item);
    });


    return categoryGroups;
  }, [groupedData, selectedCategory]);


  const flattenGroupedItems = useMemo(() => {
    let flatten = [] as SearchResultItem[];


    Object.values(categoryGroups).forEach((groupItems) => {
      flatten = [...flatten, ...groupItems];
    });


    return flatten;
  }, [categoryGroups]);


  const items = useMemo(
    () => (!isEmpty(results) ? results : (recentSearches ?? [])),
    [results, recentSearches],
  );


  // Toggle the menu when ⌘K / CTRL K is pressed
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const hotkey = isAppleDevice() ? "metaKey" : "ctrlKey";


      if (e?.key?.toLowerCase() === "k" && e[hotkey]) {
        e.preventDefault();
        isOpen ? onClose() : onOpen();
      }
    };


    document.addEventListener("keydown", onKeyDown);


    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onOpen, onClose]);


  const onItemSelect = useCallback(
    (item: SearchResultItem) => {
      onClose();
      addToRecentSearches(item);
    },
    [onClose, addToRecentSearches],
  );


  const onCategorySelect = useCallback((keys: Selection) => {
    const key = Array.from(keys)[0] as CategoryEnum;


    setSelectedCategory(key);
  }, []);


  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      eventRef.current = "keyboard";
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();


          if (activeItem + 1 < items.length + flattenGroupedItems.length) {
            setActiveItem(activeItem + 1);
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (activeItem - 1 >= 0) {
            setActiveItem(activeItem - 1);
          }
          break;
        }
        case "Control":
        case "Alt":
        case "Shift": {
          e.preventDefault();
          break;
        }
        case "Enter": {
          if (items?.length <= 0) {
            break;
          }


          if (activeItem < items.length) {
            onItemSelect(items[activeItem]);
            break;
          } else if (
            isEmpty(query) &&
            flattenGroupedItems &&
            activeItem < items.length + flattenGroupedItems?.length
          ) {
            onItemSelect(flattenGroupedItems[activeItem]);
            break;
          }


          break;
        }
      }
    },
    [activeItem, flattenGroupedItems, items, onItemSelect, query],
  );


  useUpdateEffect(() => {
    setActiveItem(0);
  }, [query]);


  useUpdateEffect(() => {
    if (!listRef.current || eventRef.current === "mouse") return;
    const node = menuNodes.map.get(activeItem);


    if (!node) return;
    scrollIntoView(node, {
      scrollMode: "if-needed",
      behavior: "smooth",
      block: "end",
      inline: "end",
      boundary: listRef.current,
    });
  }, [activeItem]);


  const CloseButton = useCallback(
    ({
      onPress,
      className,
    }: {
      onPress?: ButtonProps["onPress"];
      className?: ButtonProps["className"];
    }) => {
      return (
        <Button
          isIconOnly
          className={cn(
            "border-default-400 data-[hover=true]:bg-content2 dark:border-default-100 border",
            className,
          )}
          radius="full"
          size="sm"
          variant="bordered"
          onPress={onPress}
        >
          <Icon icon="mdi:close" width={16} />
        </Button>
      );
    },
    [],
  );


  // render each component in a group.
  const renderGroupItem = useCallback(
    (item: SearchResultItem, index: number) => {
      return (
        <Command.Item
          key={item.slug}
          ref={menuNodes.ref(index)}
          className={slots.groupItem()}
          data-active={index === activeItem}
          value={item.content}
          onMouseEnter={() => {
            eventRef.current = "mouse";


            setActiveItem(index);
          }}
          onSelect={() => {
            if (eventRef.current === "keyboard") {
              return;
            }


            onItemSelect(item);
          }}
        >
          <div
            className={cn("flex h-full w-full items-center justify-center p-3", {
              "p-0": item?.component?.attributes?.screenshot?.fullWidth,
            })}
          >
            {}
            <img
              alt={`${item.component?.name}`}
              className={cn("h-auto w-full object-scale-down", {
                "h-full object-cover": item?.component?.attributes?.screenshot?.fullWidth,
              })}
              height={120}
              src={item.component.image}
              width={120}
            />
          </div>
        </Command.Item>
      );
    },
    [activeItem, menuNodes, onItemSelect, slots],
  );


  // render each component Group.
  const renderGroups = useCallback(
    (groups: {[key: string]: SearchResultItem[]}) => {
      let totalItems = recentSearches ? recentSearches.length : 0;


      return Object.keys(groups).map((key) => {
        const groupItems = groups[key];
        const groupName = groupItems[0].group.name;


        return (
          <div key={key} className="flex flex-col">
            <Command.Group
              heading={
                <div className="flex flex-row items-center justify-between gap-1">
                  <p className="text-default-900 text-xs leading-4 font-semibold">{groupName}</p>
                  <Link
                    className={"text-default-300 text-sm leading-5 font-medium"}
                    href={`/components/${selectedCategory}/${key}`}
                  >
                    View More
                  </Link>
                </div>
              }
            >
              <ScrollShadow hideScrollBar orientation="horizontal">
                <div className="mt-2 flex flex-row gap-4">
                  {groupItems.map((item, _index) => {
                    totalItems++;


                    return item.component.attributes?.isNew ? (
                      <Badge
                        key={item.slug}
                        classNames={{
                          base: "p-0",
                          badge:
                            "py-1 px-2 text-xs bg-default-300/50 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-0 backdrop-blur-lg backdrop-saturate-150",
                        }}
                        color="default"
                        content="New"
                        placement="top-right"
                      >
                        {renderGroupItem(item, totalItems - 1)}
                      </Badge>
                    ) : (
                      renderGroupItem(item, totalItems - 1)
                    );
                  })}
                </div>
              </ScrollShadow>
            </Command.Group>
          </div>
        );
      });
    },
    [recentSearches, renderGroupItem, selectedCategory],
  );


  // render search result items.
  const renderSearchItem = useCallback(
    (item: SearchResultItem, index: number, isRecent: boolean) => {
      const isActive = index === activeItem;
      const content = (
        <Command.Item
          key={item.slug}
          ref={menuNodes.ref(index)}
          className={slots.itemWrapper()}
          data-active={isActive}
          value={item.content}
          onMouseEnter={() => {
            eventRef.current = "mouse";
            setActiveItem(index);
          }}
          onMouseLeave={() => {
            if (isActive) {
              setActiveItem(-1);
            }
          }}
          onSelect={() => {
            if (eventRef.current === "keyboard") {
              return;
            }
            onItemSelect(item);
          }}
        >
          <div className={isMobile ? slots.leftWrapperOnMobile() : slots.leftWrapper()}>
            {item.category && (
              <Icon
                className={slots.leftIcon()}
                icon={CATEGORY_ICON_MAP[item.category as CategoryEnum]}
                width={20}
              />
            )}
            <div className={slots.itemContent()}>
              <span className={slots.itemParentTitle()}>
                {capitalize(item.category)}/{capitalize(item.group.name)}
              </span>
              <p className={slots.itemTitle()}>{item.content}</p>
            </div>
          </div>
          {!isEmpty(query) && (
            <div className={slots.rightWrapper()}>
              {item.component.attributes?.isNew && <NewChip isBorderGradient />}
              <Icon className="" icon="solar:alt-arrow-right-line-duotone" width={20} />
            </div>
          )}
        </Command.Item>
      );


      if (isRecent) {
        return content;
      } else {
        return (
          <Popover key={item.slug} open={isActive && !isMobile}>
            <PopoverTrigger asChild>{content}</PopoverTrigger>
            <PopoverContent
              className={cn(
                "border-default-400/50 dark:border-default-100 h-[160px] w-[305px] overflow-hidden rounded-[14px] border",
              )}
              side={"right"}
              sideOffset={24}
            >
              <Card
                className={cn(
                  "bg-grid-slate-900/70 relative h-full w-full overflow-hidden mask-[linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",
                )}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-3 z-10 h-full w-full transform-gpu overflow-hidden blur-3xl"
                >
                  <div
                    className="aspect-1155/678 w-full bg-linear-to-tr from-[#f13a76] to-[#2e83f5] opacity-40"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <CardBody className="after:rounded-medium relative aspect-2/1 overflow-visible bg-black/40 p-0 before:absolute after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:h-16 after:bg-linear-to-t after:from-black after:to-transparent after:content-['']">
                  {/**
                   * If using in a nextjs project, use next/image instead of <img>.
                   *
                   * ```tsx
                   * import Image from "next/image";
                   *
                   * // existing code...
                   *
                   * <Image
                   *   quality={75}
                   *   // existing code...
                   * />
                   * ```
                   */}
                  {}
                  <img
                    alt={`${item?.component?.name}`}
                    className={cn(
                      "pointer-events-none absolute inset-0 z-20 h-full w-full object-scale-down p-4",
                      {
                        "object-cover p-0":
                          item?.component?.attributes?.screenshot?.fullWidth ||
                          item?.component?.attributes?.screenshot?.fullWidth === "true",
                      },
                    )}
                    height={400}
                    src={`/images/components/${item.category}/${item.slug}.png`}
                    style={{
                      objectPosition:
                        item?.component?.attributes?.screenshot?.objectPosition ?? "center",
                      ...item?.component?.attributes?.screenshot?.style,
                    }}
                    width={600}
                  />
                </CardBody>
              </Card>
            </PopoverContent>
          </Popover>
        );
      }
    },
    [activeItem, menuNodes, slots, isMobile, query, onItemSelect],
  );


  // render categories
  const renderCategories = useCallback(() => {
    return (
      <Listbox
        disallowEmptySelection
        hideSelectedIcon
        aria-label="Categories"
        classNames={{
          list: isMobile ? "flex-row gap-2" : "gap-2",
        }}
        selectedKeys={[selectedCategory]}
        selectionMode="single"
        variant="flat"
        onAction={alert}
        onSelectionChange={onCategorySelect}
      >
        {CATEGORIES.map((item) => (
          <ListboxItem
            key={item.key}
            className={slots.categoryItem()}
            startContent={<Icon className="text-default-400" icon={item.icon} width={20} />}
            textValue={item.label}
          >
            <span className="flex w-[100px]">{item.label}</span>
          </ListboxItem>
        ))}
      </Listbox>
    );
  }, [isMobile, selectedCategory, onCategorySelect, slots]);


  return (
    <>
      <Tooltip
        classNames={{
          content: "px-0",
        }}
        content={
          <Kbd
            className="hidden bg-transparent px-2 py-0.5 shadow-none lg:inline-block"
            keys={commandKey}
          >
            K
          </Kbd>
        }
        placement="bottom"
      >
        <Button
          className="mr-2"
          radius="full"
          size="md"
          variant="bordered"
          onPress={handleOpenCmdk}
        >
          <Icon
            className="text-default-400 [&>g]:stroke-[2px]"
            icon="solar:magnifer-linear"
            width={18}
          />
          Toggle command menu
        </Button>
      </Tooltip>
      <Modal
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: [
            "mt-[20vh]",
            "border-small",
            "dark:border-default-100",
            "supports-backdrop-filter:bg-background/80",
            "dark:supports-backdrop-filter:bg-background/30",
            "supports-backdrop-filter:backdrop-blur-md",
            "supports-backdrop-filter:backdrop-saturate-150",
          ],
          backdrop: ["bg-black/80"],
        }}
        isOpen={isOpen}
        motionProps={{
          onAnimationComplete: () => {
            if (!isOpen) {
              setQuery("");
            }
          },
        }}
        placement="top"
        scrollBehavior="inside"
        size={isEmpty(query) ? "2xl" : "xl"}
        onClose={() => onClose()}
      >
        <ModalContent>
          <Command className={slots.base()} label="Quick search command" shouldFilter={false}>
            <div className={slots.header()}>
              <Icon className={slots.searchIcon()} icon="solar:magnifer-linear" width={20} />
              <Command.Input
                autoFocus={!isWebKit()}
                className={slots.input()}
                placeholder="Search component..."
                value={query}
                onKeyDown={onInputKeyDown}
                onValueChange={setQuery}
              />
              {query.length > 0 && <CloseButton onPress={() => setQuery("")} />}
              <Kbd className="ml-2 hidden border-none px-2 py-1 text-[0.6rem] font-medium md:block">
                ESC
              </Kbd>
            </div>
            <div className="relative grid grid-cols-12 gap-4">
              {/* Category (Web) */}
              {!isMobile && isEmpty(query) && (
                <div className="col-span-4 flex flex-col gap-2 border-r-1 border-white/10 px-4 py-2">
                  <p className={slots.sectionTitle()}>Categories</p>
                  {renderCategories()}
                </div>
              )}
              {/* Scrollable Items */}
              <div
                ref={listRef}
                className={cn(
                  slots.listScroll(),
                  {"col-span-8": !isMobile && isEmpty(query)},
                  {"col-span-12 pl-4": isMobile || !isEmpty(query)},
                )}
              >
                <Command.List className={cn(slots.list(), "[&>div]:pb-4")} role="listbox">
                  {query.length > 0 && (
                    <Command.Empty>
                      <div className={slots.emptyWrapper()}>
                        <div>
                          <p>No results for &quot;{query}&quot;</p>
                          {query.length === 1 ? (
                            <p className="text-default-400">
                              Try adding more characters to your search term.
                            </p>
                          ) : (
                            <p className="text-default-400">Try searching for something else.</p>
                          )}
                        </div>
                      </div>
                    </Command.Empty>
                  )}
                  {isEmpty(query) && (
                    <div className={slots.listWrapper()}>
                      {/* Recent */}
                      {!isEmpty(recentSearches) && recentSearches.length > 0 && (
                        <Command.Group
                          heading={
                            <div className="flex items-center justify-between">
                              <p className={slots.sectionTitle()}>Recent</p>
                            </div>
                          }
                        >
                          <ScrollShadow hideScrollBar orientation="horizontal">
                            <div className="flex flex-row gap-2">
                              {recentSearches.map((item, index) =>
                                renderSearchItem(item, index, true),
                              )}
                            </div>
                          </ScrollShadow>
                        </Command.Group>
                      )}
                      {/* Categories (Mobile) */}
                      {isMobile && (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <p className={slots.sectionTitle()}>Categories</p>
                          </div>
                          <ScrollShadow hideScrollBar orientation="horizontal">
                            {renderCategories()}
                          </ScrollShadow>
                        </div>
                      )}
                      {/* Group */}
                      {renderGroups(categoryGroups)}
                    </div>
                  )}


                  {results.map((item, index) => renderSearchItem(item, index, false))}
                </Command.List>
              </div>
            </div>
          </Command>
        </ModalContent>
      </Modal>
    </>
  );
};


export default Component;

