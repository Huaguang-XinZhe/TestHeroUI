import {isEqual, uniqWith} from "lodash";


const columns = [
  {name: "NAME", uid: "name", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "Owner",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@acme.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Member",
    team: "Development",
    status: "pending",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@acme.com",
  },
];


/**
 * To use this function you need to install lodash in your project
 * ```bash
 * npm install lodash
 * ```
 */
const rolesOptions = uniqWith(
  users.map((user) => {
    return {
      name: user.role,
      uid: user.role.toLowerCase(),
    };
  }),
  isEqual,
);


/**
 * To use this function you need to install lodash in your project
 * ```bash
 * npm install lodash
 * ```
 */
const statusOptions = uniqWith(
  users.map((user) => {
    return {
      name: user.status,
      uid: user.status.toLowerCase(),
    };
  }),
  isEqual,
);


export {columns, users, rolesOptions, statusOptions};

