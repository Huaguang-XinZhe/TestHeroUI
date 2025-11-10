import {DangerCircleSvg} from "./danger-circle";
import {DefaultCircleSvg} from "./default-circle";
import {SuccessCircleSvg} from "./success-circle";
import {WarningCircleSvg} from "./warning-circle";


export const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Inactive", uid: "inactive"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];


export const statusColorMap = {
  Active: SuccessCircleSvg,
  Inactive: DefaultCircleSvg,
  Paused: DangerCircleSvg,
  Vacation: WarningCircleSvg,
};


export const INITIAL_VISIBLE_COLUMNS = [
  "workerID",
  "externalWorkerID",
  "memberInfo",
  "country",
  "role",
  "workerType",
  "status",
  "startDate",
  "teams",
  "actions",
];


export const columns = [
  {name: "Worker ID", uid: "workerID"},
  {name: "External Worker ID", uid: "externalWorkerID"},
  {name: "Member", uid: "memberInfo", sortDirection: "ascending"},
  {name: "Country", uid: "country"},
  {name: "Role", uid: "role"},
  {name: "Worker Type", uid: "workerType"},
  {name: "Status", uid: "status", info: "The user's current status"},
  {name: "Start Date", uid: "startDate", info: "The date the user started"},
  {name: "Teams", uid: "teams"},
  {name: "Actions", uid: "actions"},
];


const names = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Wilson",
  "Eve Martinez",
  "Frank Thompson",
  "Grace Garcia",
  "Hannah Lee",
  "Isaac Anderson",
  "Julia Roberts",
  "Liam Williams",
  "Mia White",
  "Noah Harris",
  "Olivia Martin",
  "Peyton Jones",
  "Quinn Taylor",
  "Ryan Moore",
  "Sophia Davis",
  "Marcus Lopez",
  "Uma Thomas",
  "Victoria Jackson",
  "William Green",
  "Xavier Hill",
  "Yara Scott",
  "Zoe Baker",
  "Aaron Carter",
  "Bella Brown",
  "Carter Black",
  "Daisy Clark",
  "Ethan Hunt",
  "Fiona Apple",
  "George King",
  "Harper Knight",
  "Ivy Lane",
  "Jack Frost",
  "Kylie Reed",
  "Lucas Grant",
  "Molly Shaw",
  "Nathan Ford",
  "Oliver Stone",
  "Penelope Cruz",
  "Quentin Cook",
  "Ruby Fox",
  "Sarah Miles",
  "Travis Shaw",
  "Ursula Major",
  "Vera Mindy",
  "Wesley Snipes",
  "Xena Warrior",
  "Yvette Fielding",
];


const roles = [
  "Software Engineer",
  "Marketing Specialist",
  "Human Resources Manager",
  "Data Analyst",
  "Project Manager",
  "Sales Executive",
  "Graphic Designer",
  "Operations Coordinator",
  "Product Manager",
  "Customer Service Representative",
  "Network Administrator",
  "Quality Assurance Tester",
  "Business Analyst",
  "Content Writer",
  "UX/UI Designer",
  "Accountant",
  "Supply Chain Analyst",
  "Clinical Research Coordinator",
  "Social Media Manager",
  "Web Developer",
  "SEO Specialist",
  "Event Planner",
  "Logistics Manager",
  "Technical Support Specialist",
  "Public Relations Officer",
  "Compliance Officer",
  "Financial Advisor",
  "Environmental Scientist",
  "Occupational Therapist",
  "Real Estate Agent",
];


const countries = [
  {
    name: "Argentina",
    icon: (
      <svg
        fill="none"
        height="17"
        viewBox="0 0 16 17"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3080_19703)">
          <path
            d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
            fill="#F0F0F0"
          />


          <path
            d="M8.00013 0.5C4.82844 0.5 2.08795 2.34578 0.793945 5.02175H15.2063C13.9123 2.34578 11.1718 0.5 8.00013 0.5Z"
            fill="#338AF3"
          />


          <path
            d="M8.00013 16.4993C11.1718 16.4993 13.9123 14.6535 15.2063 11.9775H0.793945C2.08795 14.6535 4.82844 16.4993 8.00013 16.4993Z"
            fill="#338AF3"
          />


          <path
            d="M10.3906 8.50019L9.41354 8.95978L9.93382 9.906L8.87289 9.70303L8.73845 10.7748L7.99948 9.98654L7.26049 10.7748L7.12608 9.70303L6.06515 9.90597L6.5854 8.95975L5.6084 8.50019L6.58543 8.04059L6.06515 7.0944L7.12605 7.29734L7.26052 6.22559L7.99948 7.01384L8.73848 6.22559L8.87289 7.29734L9.93385 7.0944L9.41357 8.04062L10.3906 8.50019Z"
            fill="#FFDA44"
          />
        </g>
        <defs>
          <clipPath id="clip0_3080_19703">
            <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Portugal",
    icon: (
      <svg
        fill="none"
        height="17"
        viewBox="0 0 16 17"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3080_19727)">
          <mask height="17" id="mask0_3080_19727" maskUnits="userSpaceOnUse" width="16" x="0" y="0">
            <path d="M16 0.5H0V16.5H16V0.5Z" fill="white" />
          </mask>
          <g mask="url(#mask0_3080_19727)">
            <path
              d="M0 8.49899C0 11.9387 2.171 14.8711 5.21734 16.0014L5.91303 8.49896L5.21734 0.996582C2.171 2.12696 0 5.05927 0 8.49899Z"
              fill="#6DA544"
            />


            <path
              d="M16.0004 8.5C16.0004 4.08175 12.4187 0.5 8.00043 0.5C7.02187 0.5 6.08446 0.676031 5.21777 0.997594V16.0024C6.08446 16.324 7.02187 16.5 8.00043 16.5C12.4187 16.5 16.0004 12.9183 16.0004 8.5Z"
              fill="#D80027"
            />


            <path
              d="M5.21716 11.2825C6.75395 11.2825 7.99976 10.0367 7.99976 8.49988C7.99976 6.96309 6.75395 5.71729 5.21716 5.71729C3.68038 5.71729 2.43457 6.96309 2.43457 8.49988C2.43457 10.0367 3.68038 11.2825 5.21716 11.2825Z"
              fill="#FFDA44"
            />


            <path
              d="M3.65234 7.10791V8.84704C3.65234 9.71148 4.35309 10.4123 5.21756 10.4123C6.08203 10.4123 6.78277 9.71151 6.78277 8.84704V7.10791H3.65234Z"
              fill="#D80027"
            />


            <path
              d="M5.21706 9.37069C4.92937 9.37069 4.69531 9.13663 4.69531 8.84894V8.15332H5.73878V8.84897C5.73878 9.13663 5.50472 9.37069 5.21706 9.37069Z"
              fill="#F0F0F0"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3080_19727">
            <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Germany",
    icon: (
      <svg
        fill="none"
        height="17"
        viewBox="0 0 16 17"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3080_19754)">
          <path
            d="M0.498047 11.2825C1.62839 14.3289 4.56073 16.4999 8.00045 16.4999C11.4402 16.4999 14.3725 14.3289 15.5029 11.2825L8.00045 10.5869L0.498047 11.2825Z"
            fill="#FFDA44"
          />


          <path
            d="M8.00045 0.5C4.56073 0.5 1.62839 2.671 0.498047 5.71741L8.00045 6.41303L15.5029 5.71737C14.3725 2.671 11.4402 0.5 8.00045 0.5Z"
            fill="black"
          />


          <path
            d="M0.497594 5.71729C0.176031 6.58394 0 7.52132 0 8.49988C0 9.47844 0.176031 10.4158 0.497594 11.2825H15.5024C15.824 10.4158 16 9.47844 16 8.49988C16 7.52132 15.824 6.58394 15.5024 5.71729H0.497594Z"
            fill="#D80027"
          />
        </g>
        <defs>
          <clipPath id="clip0_3080_19754">
            <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "United States",
    icon: (
      <svg
        fill="none"
        height="17"
        viewBox="0 0 16 17"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3080_19788)">
          <mask height="17" id="mask0_3080_19788" maskUnits="userSpaceOnUse" width="16" x="0" y="0">
            <path d="M16 0.417969H0V16.418H16V0.417969Z" fill="white" />
          </mask>
          <g mask="url(#mask0_3080_19788)">
            <path
              d="M8 16.418C12.4183 16.418 16 12.8362 16 8.41797C16 3.99969 12.4183 0.417969 8 0.417969C3.58172 0.417969 0 3.99969 0 8.41797C0 12.8362 3.58172 16.418 8 16.418Z"
              fill="#F0F0F0"
            />


            <path
              d="M7.65234 8.41803H16.0002C16.0002 7.69597 15.9039 6.99646 15.7246 6.33105H7.65234V8.41803Z"
              fill="#D80027"
            />


            <path
              d="M7.65234 4.24371H14.826C14.3362 3.44458 13.7101 2.73824 12.98 2.15674H7.65234V4.24371Z"
              fill="#D80027"
            />


            <path
              d="M7.99941 16.4183C9.88219 16.4183 11.6127 15.7676 12.9793 14.6792H3.01953C4.38609 15.7676 6.11663 16.4183 7.99941 16.4183Z"
              fill="#D80027"
            />


            <path
              d="M1.17398 12.5909H14.8256C15.2188 11.9493 15.5237 11.2481 15.7242 10.5039H0.275391C0.475922 11.2481 0.780828 11.9493 1.17398 12.5909Z"
              fill="#D80027"
            />


            <path
              d="M3.70575 1.66728H4.43478L3.75666 2.15994L4.01569 2.95709L3.33759 2.46444L2.6595 2.95709L2.88325 2.26844C2.28619 2.76578 1.76287 3.34847 1.33162 3.99772H1.56522L1.13356 4.31131C1.06631 4.4235 1.00181 4.53747 0.94 4.65312L1.14612 5.28753L0.761563 5.00812C0.665969 5.21066 0.578531 5.41775 0.499938 5.62916L0.727031 6.32816H1.56522L0.887094 6.82081L1.14612 7.61797L0.468031 7.12531L0.0618437 7.42044C0.0211875 7.74725 0 8.08012 0 8.41797H8C8 3.99972 8 3.47884 8 0.417969C6.41963 0.417969 4.94641 0.876406 3.70575 1.66728ZM4.01569 7.61797L3.33759 7.12531L2.6595 7.61797L2.91853 6.82081L2.24041 6.32816H3.07859L3.33759 5.531L3.59659 6.32816H4.43478L3.75666 6.82081L4.01569 7.61797ZM3.75666 4.49038L4.01569 5.28753L3.33759 4.79488L2.6595 5.28753L2.91853 4.49038L2.24041 3.99772H3.07859L3.33759 3.20056L3.59659 3.99772H4.43478L3.75666 4.49038ZM6.88525 7.61797L6.20716 7.12531L5.52906 7.61797L5.78809 6.82081L5.10997 6.32816H5.94816L6.20716 5.531L6.46616 6.32816H7.30434L6.62622 6.82081L6.88525 7.61797ZM6.62622 4.49038L6.88525 5.28753L6.20716 4.79488L5.52906 5.28753L5.78809 4.49038L5.10997 3.99772H5.94816L6.20716 3.20056L6.46616 3.99772H7.30434L6.62622 4.49038ZM6.62622 2.15994L6.88525 2.95709L6.20716 2.46444L5.52906 2.95709L5.78809 2.15994L5.10997 1.66728H5.94816L6.20716 0.870125L6.46616 1.66728H7.30434L6.62622 2.15994Z"
              fill="#0052B4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3080_19788">
            <rect fill="white" height="17" width="16" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "China",
    icon: (
      <svg
        fill="none"
        height="17"
        viewBox="0 0 16 17"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3080_19813)">
          <path
            d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
            fill="#D80027"
          />


          <path
            d="M4.37812 5.36816L5.06875 7.49316H7.30313L5.49687 8.80879L6.1875 10.9338L4.37812 9.62129L2.56875 10.9338L3.26251 8.80879L1.45312 7.49316H3.68751L4.37812 5.36816Z"
            fill="#FFDA44"
          />


          <path
            d="M9.48397 12.8903L8.95585 12.2403L8.17461 12.5435L8.62773 11.8403L8.09961 11.1872L8.90898 11.4028L9.36523 10.6997L9.40898 11.5372L10.2215 11.7528L9.4371 12.0528L9.48397 12.8903Z"
            fill="#FFDA44"
          />


          <path
            d="M10.534 10.9841L10.784 10.1841L10.0996 9.69971L10.9371 9.68721L11.184 8.88721L11.4559 9.68096L12.2934 9.67158L11.6215 10.1716L11.8902 10.9653L11.2059 10.481L10.534 10.9841Z"
            fill="#FFDA44"
          />


          <path
            d="M11.9504 6.37051L11.5816 7.12364L12.1816 7.70801L11.3535 7.58926L10.9848 8.33926L10.841 7.51426L10.0098 7.39551L10.7535 7.00489L10.6098 6.17676L11.2098 6.76114L11.9504 6.37051Z"
            fill="#FFDA44"
          />


          <path
            d="M9.50547 4.09033L9.44297 4.92471L10.2211 5.24033L9.40547 5.44033L9.34609 6.27783L8.90547 5.56533L8.08984 5.76533L8.63047 5.12471L8.18672 4.41533L8.96484 4.73096L9.50547 4.09033Z"
            fill="#FFDA44"
          />
        </g>
        <defs>
          <clipPath id="clip0_3080_19813">
            <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];


const generateMockUserData = (count) => {
  const mockData = [];


  for (let i = 0; i < count; i++) {
    const selectedName = names[Math.floor(Math.random() * names.length)];
    const selectedRole = roles[Math.floor(Math.random() * roles.length)];
    const selectedCountry = countries[Math.floor(Math.random() * countries.length)];


    const user = {
      id: i,
      workerID: Math.floor(Math.random() * 1000),
      externalWorkerID: `EXT-${Math.floor(Math.random() * 1000)}`,
      memberInfo: {
        avatar: `https://i.pravatar.cc/150?img=${i}`,
        email: `${selectedName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
        name: selectedName,
      },
      country: selectedCountry,
      role: selectedRole,
      workerType: Math.random() > 0.5 ? "Contractor" : "Employee",
      status:
        Math.random() > 0.5
          ? "Active"
          : Math.random() > 0.5
            ? "Paused"
            : Math.random() > 0.5
              ? "Vacation"
              : "Inactive",
      startDate: new Date(new Date().getTime() - Math.random() * (24 * 60 * 60 * 1000 * 40)),
      teams: [
        "Design",
        "Product",
        "Marketing",
        "Management",
        "Engineering",
        "Sales",
        "Support",
        "Other",
      ].filter(() => Math.random() > 0.5),
    };


    mockData.push(user);
  }


  return mockData;
};


export const users = generateMockUserData(100);

