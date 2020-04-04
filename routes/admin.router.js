const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");
const richText = require("rich-text");

AdminBro.registerAdapter(AdminBroMongoose);

const Post = require("../models/post");
const About = require('../models/about');

const adminBro = new AdminBro({
  databases: [mongoose],
  resources: [{
    resource: Post,
    options: {
      parent: {
        name: "Blog Post",
      },
      properties: {
        description: {
          type: "textarea",
        },
      },
    },
    resource: About,
    options: {
      parent: {
        name: "About Me",
      },
      listProperties: ['content'],
      properties: {
        content: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true
          },
          type: "textarea",
        },
      },
    },
  }, ],
  rootPath: "/admin",
  branding: {
    companyName: "Dragos Vasile",
    themes: {
      colors: {
        primary: "#1f2125",
      },
    },
  },
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || "dragosflorian85@yahoo.com",
  password: process.env.ADMIN_PASSWORD || "loverazvan",
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword: process.env.ADMIN_COOKIE_PASSWORD ||
    "supersecret-and-long-password-for-a-cookie-in-the-browser",
  authenticate: async (email, password) => {
    if (email == ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;