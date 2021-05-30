class SystemUnderTest {
    constructor() {
    }
    getMessage = (name: string) => {
        return `Hello ${name}`
    }
}

test("given getMessage is called, when 'Jérôme' is passed, then 'Hello Jérôme' is returned", () => {
    // arrange
    const sut = new SystemUnderTest()

    // act
    const actual = sut.getMessage("Jérôme")

    // assert
    expect(actual).toEqual("Hello Jérôme")
})