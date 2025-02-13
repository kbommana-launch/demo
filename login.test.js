const { login } = require("./login");

describe("Login Function Tests", () => {
    test("✅ Successful login with correct credentials", () => {
        expect(login("admin", "12345")).toBe("Login Successful");
        expect(login("user", "password")).toBe("Login Successful");
    });

    test("❌ Failed login with incorrect credentials", () => {
        expect(login("admin", "wrongpassword")).toBe("Invalid Username or Password");
        expect(login("user", "12345")).toBe("Invalid Username or Password");
    });

    test("❌ Failed login with non-existing user", () => {
        expect(login("unknown", "password")).toBe("Invalid Username or Password");
    });

    test("❌ Empty username and password", () => {
        expect(login("", "")).toBe("Invalid Username or Password");
    });

    test("❌ Username exists but empty password", () => {
        expect(login("admin", "")).toBe("Invalid Username or Password");
    });

    test("❌ Password exists but empty username", () => {
        expect(login("", "12345")).toBe("Invalid Username or Password");
    });
});
