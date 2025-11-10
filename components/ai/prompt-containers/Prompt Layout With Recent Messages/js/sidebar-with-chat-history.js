"use client";


import React from "react";
import {
  Avatar,
  Button,
  ScrollShadow,
  Listbox,
  ListboxItem,
  ListboxSection,
  Spacer,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  cn,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import {AcmeIcon} from "./acme";
import SidebarDrawer from "./sidebar-drawer";


/**
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */


function AvatarDropdownIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3076_10614)">
        <path
          d="M6.6665 7.50008L9.99984 4.16675L13.3332 7.50008"
          stroke="#A1A1AA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />


        <path
          d="M13.3332 12.5L9.99984 15.8333L6.6665 12.5"
          stroke="#A1A1AA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3076_10614">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}


function RecentPromptDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Icon
          className="text-default-500 opacity-0 group-hover:opacity-100"
          icon="solar:menu-dots-bold"
          width={24}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" className="py-2" variant="faded">
        <DropdownItem
          key="share"
          className="text-default-500 data-[hover=true]:text-default-500"
          startContent={
            <Icon
              className="text-default-300"
              height={20}
              icon="solar:square-share-line-linear"
              width={20}
            />
          }
        >
          Share
        </DropdownItem>
        <DropdownItem
          key="rename"
          className="text-default-500 data-[hover=true]:text-default-500"
          startContent={
            <Icon className="text-default-300" height={20} icon="solar:pen-linear" width={20} />
          }
        >
          Rename
        </DropdownItem>
        <DropdownItem
          key="archive"
          className="text-default-500 data-[hover=true]:text-default-500"
          startContent={
            <Icon
              className="text-default-300"
              height={20}
              icon="solar:folder-open-linear"
              width={20}
            />
          }
        >
          Archive
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger-500 data-[hover=true]:text-danger-500"
          color="danger"
          startContent={
            <Icon
              className="text-danger-500"
              height={20}
              icon="solar:trash-bin-minimalistic-linear"
              width={20}
            />
          }
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}


export default function Component({children, header, title, subTitle, classNames = {}}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const content = (
    <div className="relative flex h-full w-72 flex-1 flex-col p-6">
      <div className="flex items-center gap-2 px-2">
        <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
          <AcmeIcon className="text-background" />
        </div>
        <span className="text-foreground text-base leading-6 font-bold uppercase">Acme AI</span>
      </div>


      <Spacer y={8} />


      <div className="flex flex-col gap-4">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              fullWidth
              className="border-default-300 h-[60px] justify-start gap-3 rounded-[14px] border-1 bg-transparent px-3 py-[10px]"
              endContent={<AvatarDropdownIcon height={20} width={20} />}
            >
              <div className="flex w-full items-center gap-3">
                <Avatar
                  size="sm"
                  src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg"
                />


                <div className="flex flex-col text-left">
                  <p className="text-small text-foreground leading-5 font-semibold">Taylor Smith</p>
                  <p className="text-tiny text-default-400">taylor@mail.com</p>
                </div>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            className="bg-content1 w-[210px] px-[8px] py-[8px]"
            variant="flat"
          >
            <DropdownItem key="profile" className="h-14">
              <div className="flex w-full items-center gap-3">
                <Avatar
                  size="sm"
                  src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg"
                />


                <div className="flex flex-col text-left">
                  <p className="text-small text-foreground leading-5 font-normal">Taylor Smith</p>
                  <p className="text-tiny text-default-400">taylor@mail.com</p>
                </div>
              </div>
            </DropdownItem>
            <DropdownSection showDivider aria-label="profile-section-1" className="px-0">
              <DropdownItem key="my-plan" className="text-default-500 py-[4px]">
                My Plan
              </DropdownItem>
              <DropdownItem key="my-gpts" className="text-default-500 py-[4px]">
                My GPTs
              </DropdownItem>
              <DropdownItem key="customize-acmeai" className="text-default-500 py-[4px]">
                Customize AcmeAI
              </DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider aria-label="profile-section-2">
              <DropdownItem key="settings" className="text-default-500 py-[4px]">
                Settings
              </DropdownItem>
              <DropdownItem key="download-desktop-app" className="text-default-500 py-[4px]">
                Download Desktop App
              </DropdownItem>
            </DropdownSection>
            <DropdownSection aria-label="profile-section-3" className="mb-0">
              <DropdownItem key="help-and-feedback" className="text-default-500 py-[4px]">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" className="text-default-500 pt-[4px]">
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>


      <ScrollShadow className="-mr-6 h-full max-h-full pr-6">
        <Button
          fullWidth
          className="bg-default-foreground text-default-50 mt-2 mb-6 h-[44px] justify-start gap-3 px-3 py-[10px]"
          startContent={
            <Icon className="text-default-50" icon="solar:chat-round-dots-linear" width={24} />
          }
        >
          New Chat
        </Button>


        <Listbox aria-label="Recent chats" variant="flat">
          <ListboxSection
            classNames={{
              base: "py-0",
              heading: "py-0 pl-[10px] text-small text-default-400",
            }}
            title="Recent"
          >
            <ListboxItem
              key="financial-planning"
              className="group text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              Financial Planning
            </ListboxItem>
            <ListboxItem
              key="email-template"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              Email template
            </ListboxItem>
            <ListboxItem
              key="react-19-example"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              React 19 examples
            </ListboxItem>
            <ListboxItem
              key="custom-support-message"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              Custom support message
            </ListboxItem>
            <ListboxItem
              key="resignation-letter"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              Resignation Letter
            </ListboxItem>
            <ListboxItem
              key="design-test-review"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              Design test review
            </ListboxItem>
            <ListboxItem
              key="design-system-modules"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              Design systems modules
            </ListboxItem>
            <ListboxItem
              key="how-a-taximeter-works"
              className="text-default-500 h-[44px] px-[12px] py-[10px]"
              endContent={<RecentPromptDropdown />}
            >
              How a taximeter works
            </ListboxItem>
            <ListboxItem
              key="show-more"
              className="text-default-400 h-[44px] px-[12px] py-[10px]"
              endContent={
                <Icon className="text-default-300" icon="solar:alt-arrow-down-linear" width={20} />
              }
            >
              Show more
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </ScrollShadow>


      <Spacer y={8} />


      <div className="mt-auto flex flex-col">
        <Button
          fullWidth
          className="text-default-600 justify-start"
          startContent={
            <Icon className="text-default-600" icon="solar:info-circle-line-duotone" width={24} />
          }
          variant="light"
        >
          Help
        </Button>
        <Button
          className="text-default-600 justify-start"
          startContent={
            <Icon className="text-default-600" icon="solar:history-line-duotone" width={24} />
          }
          variant="light"
        >
          Activity
        </Button>


        <Button
          className="text-default-600 justify-start"
          startContent={
            <Icon
              className="text-default-600"
              icon="solar:settings-minimalistic-line-duotone"
              width={24}
            />
          }
          variant="light"
        >
          Settings
        </Button>
      </div>
    </div>
  );


  return (
    <div className="flex h-full min-h-192 w-full py-4">
      <SidebarDrawer
        className="bg-default-50 h-full flex-none rounded-[14px]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {content}
      </SidebarDrawer>
      <div className="flex w-full flex-col px-4 sm:max-w-[calc(100%-288px)]">
        <header
          className={cn(
            "rounded-t-medium border-small border-divider flex h-16 min-h-16 items-center justify-between gap-2 rounded-none px-4 py-3",
            classNames?.["header"],
          )}
        >
          <Button isIconOnly className="flex sm:hidden" size="sm" variant="light" onPress={onOpen}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:hamburger-menu-outline"
              width={24}
            />
          </Button>
          {(title || subTitle) && (
            <div className="w-full min-w-[120px] sm:w-auto">
              <div className="text-small text-foreground truncate leading-5 font-semibold">
                {title}
              </div>
              <div className="text-small text-default-500 truncate leading-5 font-normal">
                {subTitle}
              </div>
            </div>
          )}


          {header}
        </header>
        <main className="flex h-full">
          <div className="rounded-b-medium border-divider flex h-full w-full flex-col gap-4 rounded-none border-0 border-r border-b border-l py-3">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

