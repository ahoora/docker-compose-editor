export class EnvironmentVariable {
    constructor(args) {
        if (args && args.length === 2) {
            this._key = args[0];
            this._value = args[1];
        }
    }

    static create() {
        if (arguments.length === 2) {
            const environmentVariable = new EnvironmentVariable();
            environmentVariable.setKey(arguments[0]);
            environmentVariable.setValue(arguments[1]);
            return environmentVariable;
        }
    }

    getKey() {
        return this._key;
    }

    setKey(key) {
        this._key = key;
    }

    getValue() {
        return this._value;
    }

    setValue(value) {
        this._value = value;
    }
}