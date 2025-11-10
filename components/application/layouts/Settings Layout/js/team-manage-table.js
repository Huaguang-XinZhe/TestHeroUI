"use client";


import * as React from "react";
import {
  Button,
  Input,
  Chip,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@heroui/react";
import {ChevronDownIcon, SearchIcon} from "@heroui/shared-icons";
import {capitalize} from "@heroui/shared-utils";
import {Icon} from "@iconify/react";


import {columns, rolesOptions, statusOptions, users} from "./team-data";


const statusColorMap = {
  active: "success",
  pending: "danger",
  vacation: "warning",
};


const TeamManageTable = React.forwardRef(() => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [rolesFilter, setRolesFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");


  const hasSearchFilter = Boolean(filterValue);


  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];


    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (rolesFilter !== "all" && Array.from(rolesFilter).length !== rolesOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(rolesFilter).includes(user.role.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status.toLowerCase()),
      );
    }


    return filteredUsers;
  }, [filterValue, rolesFilter, statusFilter, hasSearchFilter]);


  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];


    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );


      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small text-default-500 capitalize">{cellValue}</p>
          </div>
        );


      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );


      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <Icon className="text-default-500 h-6 w-6" icon="solar:menu-dots-bold" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem key="delete">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );


      default:
        return cellValue;
    }
  }, []);


  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);


  const onClear = React.useCallback(() => {
    setFilterValue("");
  }, []);


  const topContent = React.useMemo(() => {
    return (
      <div>
        <div className="flex items-center justify-between gap-3">
          <Input
            isClearable
            className="w-full"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />


          <div className="flex gap-3">
            <Dropdown
              classNames={{
                trigger: "bg-default-100",
              }}
            >
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  All Team Roles
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={rolesFilter}
                selectionMode="multiple"
                onSelectionChange={setRolesFilter}
              >
                {rolesOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <Tabs
          aria-label="roles"
          className={"mt-3"}
          variant={"underlined"}
          onSelectionChange={(key) => {
            if (key === "pending-invitations") {
              setStatusFilter(new Set(["pending"]));
            } else {
              setStatusFilter("all");
            }
          }}
        >
          <Tab key="members" title="Members" />
          <Tab key="pending-invitations" title="Pending Invitations" />
        </Tabs>
      </div>
    );
  }, [filterValue, rolesFilter, onSearchChange, onClear]);


  return (
    <Card className={"border-default-200 border bg-transparent"} shadow="none">
      <CardBody>
        <Table
          hideHeader
          isHeaderSticky
          aria-label="Team Manage Table"
          checkboxesProps={{
            classNames: {
              wrapper: ["after:bg-foreground after:text-background text-background"],
            },
          }}
          classNames={{
            wrapper: "max-h-[382px] bg-transparent p-0 border-none shadow-none",
          }}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No users found"} items={filteredItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
});


TeamManageTable.displayName = "TeamManageTable";


export default TeamManageTable;

