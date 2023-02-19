import { Sequelize, DataTypes } from "sequelize";
import "path";
function getUser(db2, DataTypes2) {
  const User = db2.define(
    "users",
    {
      id: {
        type: DataTypes2.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes2.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes2.STRING,
        allowNull: false
      },
      accountType: {
        type: DataTypes2.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes2.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes2.TEXT,
        allowNull: true
      }
    }
  );
  return User;
}
function getRegion(db2, DataTypes2) {
  const Region = db2.define(
    "regions",
    {
      id: {
        type: DataTypes2.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes2.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes2.TEXT,
        allowNull: true
      },
      cityId: {
        type: DataTypes2.INTEGER,
        allowNull: false
      }
    }
  );
  return Region;
}
function getCity(db2, DataTypes2) {
  const City2 = db2.define(
    "cities",
    {
      id: {
        type: DataTypes2.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes2.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes2.TEXT,
        allowNull: true
      }
    }
  );
  return City2;
}
function getBusiness(db2, DataTypes2) {
  const Business = db2.define(
    "business",
    {
      id: {
        type: DataTypes2.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes2.STRING,
        allowNull: true
      },
      number: {
        type: DataTypes2.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes2.TEXT,
        allowNull: true
      },
      regionId: {
        type: DataTypes2.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes2.INTEGER,
        allowNull: false
      },
      businessTypeId: {
        type: DataTypes2.INTEGER,
        allowNull: false
      }
    }
  );
  return Business;
}
function getBusinessType(db2, DataTypes2) {
  const BusinessType = db2.define(
    "businessTypes",
    {
      id: {
        type: DataTypes2.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes2.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes2.TEXT,
        allowNull: true
      }
    }
  );
  return BusinessType;
}
function getArticle(db2, DataTypes2) {
  const Article = db2.define(
    "article",
    {
      id: {
        type: DataTypes2.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes2.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes2.TEXT,
        allowNull: false
      }
    }
  );
  return Article;
}
const db = new Sequelize({
  dialect: "sqlite",
  storage: "fill4Sqlite.sqlite",
  logging: false
});
getUser(db, DataTypes);
getRegion(db, DataTypes);
const CitySeq = getCity(db, DataTypes);
getBusiness(db, DataTypes);
getBusinessType(db, DataTypes);
getArticle(db, DataTypes);
const forcedFlag = false;
db.sync({ forced: forcedFlag }).then((result) => {
  {
    console.log("sqlite==> setup complete.");
  }
}).catch((err) => {
  throw new Error("sqlite failure", err);
});
class Table {
  constructor(sequalizeModel) {
    this.seqTable = sequalizeModel;
  }
  //------------------CREATE----------------------------------
  async create(data) {
    try {
      const seqItem = await this.seqTable.create(data);
      const item = seqItem.toJSON();
      return item;
    } catch (error) {
      console.error(`Failed to create new record. Error: ${error}`);
    }
  }
  //------------------READ----------------------------------
  async read(id) {
    try {
      const seqItem = await this.seqTable.findByPk(id);
      if (seqItem) {
        const item = seqItem.toJSON();
        return item;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to fetch item with ID ${id}. Error: ${error}`);
    }
  }
  //------------------UPDATE----------------------------------
  async update(id, data) {
    try {
      const seqItem = await this.seqTable.update(data, { where: { id } });
      return true;
    } catch (error) {
      console.error(`Failed to update item with ID ${id}. Error: ${error}`);
    }
  }
  //------------------Del----------------------------------
  async del(id) {
    try {
      const deletedCount = await this.seqTable.destroy({ where: { id } });
      if (deletedCount) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to delete ID ${id}. Error: ${error}`);
    }
  }
  //------------------READ ALL-----------------------------
  async findAll() {
    try {
      const seqItem = await this.seqTable.findAll();
      if (seqItem) {
        const item = seqItem.map((r) => r.toJSON());
        return item;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to fetch items. Error: ${error}`);
    }
  }
  //------------------READ ALL-----------------------------
  async where(data) {
    try {
      const seqItems = await this.seqTable.findAll({ where: data });
      if (seqItems) {
        const items = seqItems.map((r) => r.toJSON());
        return items;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to fetch items with provided args. Error: ${error}`);
    }
  }
  //--where
  async destroy() {
    try {
      const seqItems = await this.seqTable.destroy({ where: {} });
      if (seqItems) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to destroy. Error: ${error}`);
    }
  }
  //--where
  async destroyWhere(data) {
    try {
      const seqItems = await this.seqTable.destroy({ where: data });
      if (seqItems) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to destroy. Error: ${error}`);
    }
  }
  //--where
  async count(data) {
    try {
      const seqItems = await this.seqTable.count(data);
      if (seqItems) {
        return seqItems;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to count. Error: ${error}`);
    }
  }
  //--where
  async bulkCreate(data) {
    try {
      const seqItems = await this.seqTable.bulkCreate(data);
      if (seqItems) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to bulkCreate. Error: ${error}`);
    }
  }
  //--count
  async findOne(data) {
    try {
      const seqItems = await this.seqTable.findOne({ where: data });
      if (seqItems) {
        return seqItems;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Failed to findOne. Error: ${error}`);
    }
  }
  //--count
}
const City = new Table(CitySeq);
async function load({ fetch }) {
  const cities = City.findAll();
  return {
    title: "The Title from load function",
    cities
  };
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log("formData", formData);
    return { success: true };
  }
};
export {
  actions,
  load
};
