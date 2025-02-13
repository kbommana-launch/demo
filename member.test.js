const { addMember, getMembers, deleteMember, editMember } = require("./member");

describe("Member Management Tests", () => {
    beforeEach(() => {
        // Reset the members array before each test
        while (getMembers().length > 0) {
            deleteMember(0);
        }
    });

    test("✅ Successfully edits a member", () => {
        addMember("John Doe", "john@example.com", "password123", "User");
        expect(getMembers()[0].email).toBe("john@example.com");

        expect(editMember(0, "John Smith", "john.smith@example.com", "Admin"))
            .toBe("Member updated successfully");
        expect(getMembers()[0].name).toBe("John Smith");
        expect(getMembers()[0].email).toBe("john.smith@example.com");
        expect(getMembers()[0].role).toBe("Admin");
    });

    test("❌ Fails to edit a member with an invalid index", () => {
        expect(editMember(5, "Jane Doe", "jane@example.com", "User"))
            .toBe("Invalid index");
    });

    test("❌ Fails to edit with empty name or email", () => {
        addMember("Alice", "alice@example.com", "pass123", "Moderator");

        expect(editMember(0, "", "alice.new@example.com", "Admin"))
            .toBe("Name and Email cannot be empty");

        expect(editMember(0, "Alice New", "", "Admin"))
            .toBe("Name and Email cannot be empty");
    });

    test("✅ Edits a member while keeping the role unchanged", () => {
        addMember("David", "david@example.com", "securepass", "Moderator");
        expect(editMember(0, "David Updated", "david.new@example.com", "Moderator"))
            .toBe("Member updated successfully");

        expect(getMembers()[0].role).toBe("Moderator");
    });
});
