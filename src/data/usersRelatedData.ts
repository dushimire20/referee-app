import {Assignment} from "@/data/gameRelatedData.ts";

export const levels = [
    'Select referee Level',
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
];

export type SystemRole = 'Referee' | 'Admin';

export interface Profile {
    arbitratorId : number;
    firstName : string;
    lastName : string;
    email : string;
    arbitratorRole : string;
    phoneNumber : string;
    systemRole : SystemRole;
}

export interface Referee extends Profile {
    assignments : Assignment[];
}

export const referees: Referee[] = [
    {
        arbitratorId: 1,
        firstName: "Gasana",
        lastName: "Williams",
        email: "gasana.williams@example.com",
        arbitratorRole: "REFEREE",
        phoneNumber: "+250781234567",
        systemRole: "Referee",
        assignments: []
    },
    {
        arbitratorId: 2,
        firstName: "Sarah",
        lastName: "Mutesi",
        email: "sarah.mutesi@example.com",
        arbitratorRole: "UMPIRE_I",
        phoneNumber: "+250782345678",
        systemRole: "Referee",
        assignments: []
    },
    {
        arbitratorId: 4,
        firstName: "Emma",
        lastName: "Ishimwe",
        email: "emma.ishimwe@example.com",
        arbitratorRole: "SHOT_CLOCK",
        phoneNumber: "+250784567890",
        systemRole: "Referee",
        assignments: []
    },
    {
        arbitratorId: 5,
        firstName: "Nshimiyimana",
        lastName: "Brown",
        email: "nshimiyimana.brown@example.com",
        arbitratorRole: "TIMER",
        phoneNumber: "+250785678901",
        systemRole: "Referee",
        assignments: []
    },
    {
        arbitratorId: 7,
        firstName: "Ingabire",
        lastName: "Smith",
        email: "ingabire.smith@example.com",
        arbitratorRole: "SCORER",
        phoneNumber: "+250787890123",
        systemRole: "Referee",
        assignments: []
    },
    {
        arbitratorId: 9,
        firstName: "Muhire",
        lastName: "Taylor",
        email: "muhire.taylor@example.com",
        arbitratorRole: "UMPIRE_I",
        phoneNumber: "+250789012345",
        systemRole: "Referee",
        assignments: []
    },
    {
        arbitratorId: 10,
        firstName: "Sophie",
        lastName: "Umutoni",
        email: "sophie.umutoni@example.com",
        arbitratorRole: "UMPIRE_II",
        phoneNumber: "+250780123456",
        systemRole: "Referee",
        assignments: []
    },
]

export const users: (Referee | Profile)[] = [

    {
        arbitratorId: 3,
        firstName: "Jean-Pierre",
        lastName: "Habimana",
        email: "jeanpierre.habimana@example.com",
        arbitratorRole: "ADMIN",
        phoneNumber: "+250783456789",
        systemRole: "Admin"
    },


    {
        arbitratorId: 6,
        firstName: "Claire",
        lastName: "Uwase",
        email: "claire.uwase@example.com",
        arbitratorRole: "ADMIN",
        phoneNumber: "+250786789012",
        systemRole: "Admin"
    },

    {
        arbitratorId: 8,
        firstName: "Robert",
        lastName: "Mugisha",
        email: "robert.mugisha@example.com",
        arbitratorRole: "ADMIN",
        phoneNumber: "+250788901234",
        systemRole: "Admin"
    },

    {
        arbitratorId: 11,
        firstName: "Eric",
        lastName: "Ndayisaba",
        email: "eric.ndayisaba@example.com",
        arbitratorRole: "ADMIN",
        phoneNumber: "+250781234567",
        systemRole: "Admin"
    },
    {
        arbitratorId: 12,
        firstName: "Marie",
        lastName: "Keza",
        email: "marie.keza@example.com",
        arbitratorRole: "ADMIN",
        phoneNumber: "+250782345678",
        systemRole: "Admin"
    }
];
