class BiMap<T, U> {
    private map1: Map<T, U>;
    private map2: Map<U, T>;

    constructor() {
        this.map1 = new Map;
        this.map2 = new Map;

        return this;
    }

    push(key: T, value: U) {
        this.map1.set(key, value);
        this.map2.set(value, key);

        return this;
    }

    value(value: T) { return this.map1.get(value); }
    key(key: U) { return this.map2.get(key); }
}

const square = new BiMap<string, number>()
        .push("a", 11).push("b", 12).push("c", 13).push("d", 14).push("e", 15)
        .push("f", 21).push("g", 22).push("h", 23).push("i", 24).push("j", 24).push("k", 25)
        .push("l", 31).push("m", 32).push("n", 33).push("o", 34).push("p", 35)
        .push("q", 41).push("r", 42).push("s", 43).push("t", 44).push("u", 45)
        .push("v", 51).push("w", 52).push("x", 53).push("y", 54).push("z", 55);

function encode(msg: string) {
    for (let i = 0; i < msg.length; i++) {
        if (msg.charAt(i) !== " ") {
            let result = square.value(msg.charAt(i));

            if (typeof result !== "undefined") {
                process.stdout.write(result.toString());
                process.stdout.write(" ");
            }
        }
    }
}

function decode(msg: string) {
    let msgToDecode = msg.split(" ");

    for (let i = 0; i < msgToDecode.length; i++) {
        let result = square.key(parseInt(msgToDecode[i]));

        if (typeof result !== "undefined")
            process.stdout.write(result);

    }
}

const msg = "sphinx of black quartz judge my vow";
const msg2 = "44 23 15 41 45 24 13 25 12 42 34 52 33 21 34 53 24 45 32 35 43 34 51 15 42 44 23 15 31 11 55 54 14 34 22"

encode(msg);
process.stdout.write("\n");
decode(msg2);