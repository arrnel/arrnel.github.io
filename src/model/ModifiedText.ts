export interface ModifiedText {
    readonly value: string;
    getSimpleName(): string;
}

export class TranslateCode implements ModifiedText {
    readonly value: string;
    constructor(key: string) {
        this.value = key;
    }
    getSimpleName(): string {
        return this.constructor.name;
    }
}

export class FormatTranslateCode implements ModifiedText {
    readonly value: string;
    constructor(key: string) {
        this.value = key;
    }
    getSimpleName(): string {
        return this.constructor.name;
    }
}

export class MarkdownTranslateCode implements ModifiedText {
    readonly value: string;
    constructor(key: string) {
        this.value = key;
    }
    getSimpleName(): string {
        return this.constructor.name;
    }
}