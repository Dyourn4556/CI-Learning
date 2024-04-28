import { faker } from '@faker-js/faker';

    export function getFirstName(): string {
        return faker.person.firstName();
    }

    export function getLastName(): string {
        return faker.person.lastName();
    }

    export function getNumber(): string {
        return faker.phone.number();
    }

    export function getEmail(): string {
        return faker.internet.email();
    }