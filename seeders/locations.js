"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "locations",
      [
        {
          name: "ZaLat – Fitzhugh Dallas",
          address: "2519 N Fitzhugh Ave, Dallas, Texas 75204",
          phone: "(214) 370-9786",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "ZaLat – Cedars (Lamar St)",
          address: "1701 South Lamar Street, Dallas, Texas 75215",
          phone: "(214) 484-8368",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "ZaLat - Legacy Plano",
          address: "7224 Independence Parkway, Suite 316, Plano, Texas 75025",
          phone: "(972) 208-2371",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "ZaLat - Downtown Plano",
          address: "1032 E 15th St, Plano, Texas 75074",
          phone: "(972) 422–9001",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "ZaLat - Denton",
          address: "1120 W Hickory St, Denton, TX 76201",
          phone: "(940) 654-4200",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        },
        {
          name: "ZaLat - Ft Worth",
          address: "843 Foch St., Ft. Worth, TX 76107",
          phone: "(817)-780-0420",
          createdAt: "2020-02-04 00:00:00",
          updatedAt: "2020-02-04 00:00:00"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null, {});
  }
};
