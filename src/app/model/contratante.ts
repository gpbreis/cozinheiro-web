export class Contratante {
    constructor(
        public name: string,
        public phone: string,
        public email: string,
        public priority: boolean
    ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.priority = priority;
    }
}