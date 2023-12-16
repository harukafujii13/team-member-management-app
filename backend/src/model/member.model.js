const db = require("../service/postgres");

module.exports = class Member {
  constructor(first_name, last_name, email, phone_num, role) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_num = phone_num;
    this.role = role;
  }

  async save() {
    const query = {
      name: "insert-member",
      text: "INSERT INTO members (first_name, last_name, email, phone_num, role) VALUES ($1, $2, $3, $4, $5)",
      values: [
        this.first_name,
        this.last_name,
        this.email,
        this.phone_num,
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
      return await db.query("SELECT * FROM members ORDER BY member_id DESC");
    } catch (err) {
      throw err;
    }
  }

  static async findById(id) {
    try {
      return await db.query("SELECT * FROM members WHERE member_id = $1", [id]);
    } catch (err) {
      throw err;
    }
  }

  static async updateOne(data) {
    const sql =
      "UPDATE members SET first_name = $1, last_name = $2, email = $3, phone_num = $4, role = $5 WHERE member_id = $6";
    const params = [
      data.first_name,
      data.last_name,
      data.email,
      data.phone_num,
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
      return await db.query("DELETE FROM members WHERE member_id = $1", [id]);
    } catch (err) {
      throw err;
    }
  }
};
