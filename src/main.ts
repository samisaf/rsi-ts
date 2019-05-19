import Vue from "vue";

let rsi = new Vue({
    el: "#meds",
    data: {
      meds: {
        Sedatives: {
          Etomidate: 0.3,
          Ketamine: [1, 2],
          Propofol: [2, 3],
          Midazolam: 0.3
        },
        Paralytics: {
          Succinylcholine: 1.5,
          Rocuronium: [0.6, 1]
        },
        Analgesics: {
          Fentanyl: [0.001, 0.002],
          Lidocaine: 1.5
        }
      },
      weight: 70
    },
    methods: {
      multiply: function (factor, arr) {
        if (typeof (arr) == "number")
          return factor * arr
        else
          return arr.map((e) => e * factor)
      }
    }
  });
  