const db = require("../service/postgres");

module.exports = class Member {
  constructor(firstName, lastName, email, phoneNum, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNum = phoneNum;
    this.role = role;
  }

  async save() {
    const query = {
      name: "insert-member",
      text: "INSERT INTO Members (FirstName, LastName, Email, PhoneNum, Role) VALUES ($1, $2, $3, $4, $5)",
      values: [
        this.firstName,
        this.lastName,
        this.email,
        this.phoneNum,
        this.role,
      ],
    };
    try {
      return await db.query(query);
    } catch (err) {
      throw err;
    }
  }

  static async find() {
    try {
      return await db.query("SELECT * FROM Members ORDER BY Member_ID DESC");
    } catch (err) {
      throw err;
    }
  }

  static async findById(id) {
    try {
      return await db.query("SELECT * FROM Members WHERE Member_ID = $1", [id]);
    } catch (err) {
      throw err;
    }
  }

  static async updateOne(data) {
    const sql =
      "UPDATE Members SET FirstName = $1, LastName = $2, Email = $3, PhoneNum = $4, Role = $5 WHERE Member_ID = $6";
    const params = [
      data.firstName,
      data.lastName,
      data.email,
      data.phoneNum,
      data.role,
      data.id,
    ];
    try {
      return await db.query(sql, params);
    } catch (err) {
      throw err;
    }
  }

  static async deleteOne(id) {
    try {
      return await db.query("DELETE FROM Members WHERE Member_ID = $1", [id]);
    } catch (err) {
      throw err;
    }
  }
};
