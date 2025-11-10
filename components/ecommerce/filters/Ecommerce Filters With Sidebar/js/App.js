"use client";


import React from "react";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import FiltersWrapper from "./filters-wrapper";
import ecommerceItems from "./ecommerce-items";
import SidebarDrawer from "./sidebar-drawer";
import ProductsGrid from "./products-grid";


export default function Component() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <div className="max-w-8xl h-full w-full px-2 lg:px-24">
      <nav className="my-4 px-2 py-2">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Shoes Category</BreadcrumbItem>
          <BreadcrumbItem>Training Shoes</BreadcrumbItem>
        </Breadcrumbs>
      </nav>
      <div className="flex gap-x-6">
        <SidebarDrawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <FiltersWrapper
            className="bg-default-50"
            items={ecommerceItems}
            scrollShadowClassName="max-h-full pb-12"
            showActions={false}
            title="Filter by"
          />
        </SidebarDrawer>
        <div className="w-full flex-1 flex-col">
          <header className="rounded-medium bg-default-50 relative z-20 flex flex-col gap-2 px-4 pt-2 pb-3 md:pt-3">
            <div className="flex items-center gap-1 md:hidden md:gap-2">
              <h2 className="text-large font-medium">Shoes</h2>
              <span className="text-small text-default-400">(1240)</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Button
                  className="border-default-200 flex sm:hidden"
                  startContent={
                    <Icon
                      className="text-default-500"
                      height={16}
                      icon="solar:filter-linear"
                      width={16}
                    />
                  }
                  variant="bordered"
                  onPress={onOpen}
                >
                  Filters
                </Button>
                <div className="hidden items-center gap-1 md:flex">
                  <h2 className="text-medium font-medium">Shoes</h2>
                  <span className="text-small text-default-400">(1240)</span>
                </div>
              </div>
              <Select
                aria-label="Sort by"
                classNames={{
                  base: "items-center justify-end",
                  label:
                    "hidden lg:block text-tiny whitespace-nowrap md:text-small text-default-400",
                  mainWrapper: "max-w-xs",
                }}
                defaultSelectedKeys={["most_popular"]}
                label="Sort by"
                labelPlacement="outside-left"
                placeholder="Select an option"
                variant="bordered"
              >
                <SelectItem key="newest">Newest</SelectItem>
                <SelectItem key="price_low_to_high">Price: Low to High</SelectItem>
                <SelectItem key="price_high_to_low">Price: High to Low</SelectItem>
                <SelectItem key="top_rated">Top Rated</SelectItem>
                <SelectItem key="most_popular">Most Popular</SelectItem>
              </Select>
            </div>
          </header>
          <main className="mt-4 h-full w-full overflow-visible px-1">
            <div className="rounded-medium border-medium border-divider block border-dashed">
              {/* Put your content here */}
              <ProductsGrid className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

