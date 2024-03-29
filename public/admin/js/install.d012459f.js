(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["install"],
  {
    "0d7a": function (e, t, r) {},
    "34ad": function (e, t, r) {},
    4471: function (e, t, r) {
      "use strict";
      var s = r("0d7a"),
        n = r.n(s);
      n.a;
    },
    4858: function (e, t, r) {
      "use strict";
      r.r(t);
      var s = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "PublicView",
            { attrs: { wide: "", heading: e.$t("create_project") } },
            [
              r("public-stepper", {
                staticClass: "stepper",
                attrs: { steps: 5, "current-step": e.step },
              }),
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 === e.step,
                      expression: "step === 1",
                    },
                  ],
                  staticClass: "step-1",
                },
                [
                  e.firstInstall
                    ? [
                        r("div", { staticClass: "field-grid" }, [
                          r("div", { staticClass: "field" }, [
                            r("h2", { staticClass: "type-title" }, [
                              e._v(e._s(e.$t("welcome_to_directus"))),
                            ]),
                            r("p", [
                              e._v(e._s(e.$t("welcome_to_directus_copy"))),
                            ]),
                          ]),
                        ]),
                        r(
                          "button",
                          {
                            attrs: { type: "button" },
                            on: {
                              click: function (t) {
                                e.step = 2;
                              },
                            },
                          },
                          [e._v(e._s(e.$t("next")))]
                        ),
                      ]
                    : [
                        r("div", { staticClass: "field-grid" }, [
                          r("div", { staticClass: "field" }, [
                            r("h2", { staticClass: "type-title" }, [
                              e._v(e._s(e.$t("create_new_project"))),
                            ]),
                            r("p", [
                              e._v(e._s(e.$t("create_new_project_copy"))),
                            ]),
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.super_admin_token,
                                  expression: "super_admin_token",
                                },
                                { name: "focus", rawName: "v-focus" },
                              ],
                              attrs: {
                                placeholder: "Super-Admin Password...",
                                type: "text",
                              },
                              domProps: { value: e.super_admin_token },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.super_admin_token = t.target.value);
                                },
                              },
                            }),
                          ]),
                        ]),
                        r(
                          "button",
                          {
                            attrs: { type: "button" },
                            on: {
                              click: function (t) {
                                e.step = 2;
                              },
                            },
                          },
                          [e._v(e._s(e.$t("next")))]
                        ),
                      ],
                ],
                2
              ),
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 2 === e.step,
                      expression: "step === 2",
                    },
                  ],
                  staticClass: "step-2",
                },
                [
                  2 === e.step
                    ? r("install-requirements", {
                        attrs: { "super-admin-token": e.super_admin_token },
                      })
                    : e._e(),
                  r("div", { staticClass: "buttons" }, [
                    r(
                      "span",
                      {
                        staticClass: "secondary",
                        on: {
                          click: function (t) {
                            e.step--;
                          },
                        },
                      },
                      [e._v(e._s(e.$t("back")))]
                    ),
                    r(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: {
                          click: function (t) {
                            e.step = 3;
                          },
                        },
                      },
                      [e._v(e._s(e.$t("next")))]
                    ),
                  ]),
                ],
                1
              ),
              r(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 3 === e.step,
                      expression: "step === 3",
                    },
                  ],
                  staticClass: "step-3",
                  on: {
                    submit: function (t) {
                      t.preventDefault(), (e.step = 4);
                    },
                  },
                },
                [
                  r("fieldset", [
                    r("legend", { staticClass: "type-title" }, [
                      e._v(e._s(e.$t("project_info"))),
                    ]),
                    r("div", { staticClass: "field-grid" }, [
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "project_name" },
                          },
                          [e._v(" " + e._s(e.$t("project_name")) + " ")]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.project_name,
                              expression: "project_name",
                            },
                            { name: "focus", rawName: "v-focus" },
                          ],
                          attrs: {
                            id: "project_name",
                            name: "project_name",
                            type: "text",
                            required: "",
                          },
                          domProps: { value: e.project_name },
                          on: {
                            input: [
                              function (t) {
                                t.target.composing ||
                                  (e.project_name = t.target.value);
                              },
                              e.syncKey,
                            ],
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "project" },
                          },
                          [e._v(e._s(e.$t("project_key")))]
                        ),
                        r("input", {
                          attrs: {
                            id: "project",
                            name: "project",
                            type: "text",
                            required: "",
                            pattern: "^[0-9a-z_-]+$",
                          },
                          domProps: { value: e.project },
                          on: { input: e.setProjectKey },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "user_email" },
                          },
                          [e._v(e._s(e.$t("admin_email")))]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.user_email,
                              expression: "user_email",
                            },
                          ],
                          attrs: {
                            id: "user_email",
                            name: "user_email",
                            type: "email",
                            required: "",
                          },
                          domProps: { value: e.user_email },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.user_email = t.target.value);
                            },
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "user_password" },
                          },
                          [e._v(" " + e._s(e.$t("admin_password")) + " ")]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.user_password,
                              expression: "user_password",
                            },
                          ],
                          staticClass: "password",
                          attrs: {
                            id: "user_password",
                            name: "user_password",
                            type: "text",
                            required: "",
                          },
                          domProps: { value: e.user_password },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.user_password = t.target.value);
                            },
                          },
                        }),
                      ]),
                    ]),
                    r("div", { staticClass: "buttons" }, [
                      r(
                        "span",
                        {
                          staticClass: "secondary",
                          on: {
                            click: function (t) {
                              e.step--;
                            },
                          },
                        },
                        [e._v(e._s(e.$t("back")))]
                      ),
                      r("button", { attrs: { type: "submit" } }, [
                        e._v(e._s(e.$t("next"))),
                      ]),
                    ]),
                  ]),
                ]
              ),
              r(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 4 === e.step,
                      expression: "step === 4",
                    },
                  ],
                  staticClass: "step-4",
                  on: {
                    submit: function (t) {
                      return t.preventDefault(), e.onSubmit(t);
                    },
                  },
                },
                [
                  r("fieldset", [
                    r("legend", { staticClass: "type-title" }, [
                      e._v(e._s(e.$t("database_connection"))),
                    ]),
                    r("div", { staticClass: "field-grid" }, [
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "db_host" },
                          },
                          [e._v(e._s(e.$t("host")))]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.db_host,
                              expression: "db_host",
                            },
                            { name: "focus", rawName: "v-focus" },
                          ],
                          attrs: {
                            id: "db_host",
                            name: "db_host",
                            type: "text",
                            required: "",
                          },
                          domProps: { value: e.db_host },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.db_host = t.target.value);
                            },
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "db_port" },
                          },
                          [e._v(e._s(e.$t("port")))]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.db_port,
                              expression: "db_port",
                            },
                          ],
                          attrs: {
                            id: "db_port",
                            name: "db_port",
                            type: "number",
                            required: "",
                          },
                          domProps: { value: e.db_port },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.db_port = t.target.value);
                            },
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "db_user" },
                          },
                          [e._v(e._s(e.$t("db_user")))]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.db_user,
                              expression: "db_user",
                            },
                          ],
                          attrs: {
                            id: "db_user",
                            name: "db_user",
                            type: "text",
                            required: "",
                          },
                          domProps: { value: e.db_user },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.db_user = t.target.value);
                            },
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "db_password" },
                          },
                          [e._v(e._s(e.$t("db_password")))]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.db_password,
                              expression: "db_password",
                            },
                          ],
                          staticClass: "password",
                          attrs: {
                            id: "db_password",
                            name: "db_password",
                            type: "password",
                          },
                          domProps: { value: e.db_password },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.db_password = t.target.value);
                            },
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "db_name" },
                          },
                          [e._v(e._s(e.$t("db_name")))]
                        ),
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.db_name,
                              expression: "db_name",
                            },
                          ],
                          attrs: {
                            id: "db_name",
                            name: "db_name",
                            type: "text",
                            required: "",
                          },
                          domProps: { value: e.db_name },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.db_name = t.target.value);
                            },
                          },
                        }),
                      ]),
                      r("div", { staticClass: "field" }, [
                        r(
                          "label",
                          {
                            staticClass: "type-label",
                            attrs: { for: "db_type" },
                          },
                          [e._v(e._s(e.$t("db_type")))]
                        ),
                        r("div", { staticClass: "select" }, [
                          r("input", {
                            attrs: {
                              id: "db_type",
                              name: "db_type",
                              type: "text",
                              value: "MySQL",
                              disabled: "",
                            },
                          }),
                        ]),
                      ]),
                    ]),
                    r("div", { staticClass: "buttons" }, [
                      r(
                        "span",
                        {
                          staticClass: "secondary",
                          on: {
                            click: function (t) {
                              e.step--;
                            },
                          },
                        },
                        [e._v(e._s(e.$t("back")))]
                      ),
                      r("button", { attrs: { type: "submit" } }, [
                        e._v(e._s(e.$t("install"))),
                      ]),
                    ]),
                  ]),
                ]
              ),
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 5 === e.step,
                      expression: "step === 5",
                    },
                  ],
                  staticClass: "step-5",
                },
                [
                  r("h2", { staticClass: "type-title" }, [
                    e._v(e._s(e.$t("wrapping_up"))),
                  ]),
                  r("div", { staticClass: "field-grid" }, [
                    r(
                      "div",
                      { staticClass: "field" },
                      [
                        r("v-progress-linear", {
                          staticClass: "progress-bar",
                          attrs: { rounded: "", indeterminate: "" },
                        }),
                        r("p", [
                          e._v(" " + e._s(e.$t("install_busy_copy")) + " "),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 6 === e.step,
                      expression: "step === 6",
                    },
                  ],
                  staticClass: "step-6",
                },
                [
                  r("h2", { staticClass: "type-title" }, [
                    e._v(e._s(e.$t("all_set"))),
                  ]),
                  r("div", { staticClass: "field-grid" }, [
                    r(
                      "div",
                      { staticClass: "field" },
                      [
                        r("v-progress-linear", {
                          staticClass: "progress-bar",
                          attrs: { value: 100, rounded: "" },
                        }),
                        r("p", [
                          e._v(" " + e._s(e.$t("install_all_set_copy")) + " "),
                          e.firstInstall
                            ? r("span", { staticClass: "warning" }, [
                                e._v(
                                  " " +
                                    e._s(
                                      e.$t(
                                        "install_all_set_super_admin_password"
                                      )
                                    ) +
                                    " "
                                ),
                              ])
                            : e._e(),
                        ]),
                        e.firstInstall
                          ? r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.super_admin_token,
                                  expression: "super_admin_token",
                                },
                              ],
                              attrs: { type: "text", readonly: "" },
                              domProps: { value: e.super_admin_token },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.super_admin_token = t.target.value);
                                },
                              },
                            })
                          : e._e(),
                        r(
                          "button",
                          {
                            staticClass: "button",
                            attrs: { type: "button" },
                            on: { click: e.goToLogin },
                          },
                          [e._v(" " + e._s(e.$t("sign_in")) + " ")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              e.notice.text
                ? r(
                    "public-notice",
                    {
                      attrs: {
                        slot: "notice",
                        loading: !1,
                        color: e.notice.color,
                        icon: e.notice.icon,
                      },
                      slot: "notice",
                    },
                    [e._v(" " + e._s(e.notice.text) + " ")]
                  )
                : e._e(),
            ],
            1
          );
        },
        n = [],
        i =
          (r("a4d3"),
          r("4de4"),
          r("4160"),
          r("e439"),
          r("dbb4"),
          r("b64b"),
          r("159b"),
          r("96cf"),
          r("1da1")),
        a = r("ade3"),
        o = r("89b3"),
        c = r("8a0c"),
        u = r("bc3a"),
        p = r.n(u),
        l = r("2f62"),
        v = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            { staticClass: "public-stepper" },
            [
              r("div", { staticClass: "progress-line", style: e.lineStyles }),
              e._l(e.steps, function (t) {
                return r(
                  "span",
                  {
                    key: t,
                    staticClass: "step",
                    class: {
                      current: t === e.currentStep,
                      done: e.currentStep > t,
                    },
                  },
                  [
                    e.currentStep > t
                      ? r("v-icon", {
                          attrs: { color: "--white", small: "", name: "check" },
                        })
                      : e._e(),
                  ],
                  1
                );
              }),
            ],
            2
          );
        },
        f = [],
        d =
          (r("a9e3"),
          {
            name: "PublicStepper",
            props: {
              currentStep: { type: Number, default: 1 },
              steps: { type: Number, default: 1 },
            },
            computed: {
              lineStyles: function () {
                return {
                  transform: "scaleX(".concat(
                    (1 / (this.steps - 1)) *
                      ((this.currentStep > this.steps
                        ? this.steps
                        : this.currentStep) -
                        1),
                    ")"
                  ),
                };
              },
            },
          }),
        h = d,
        m = (r("ca64"), r("2877")),
        _ = Object(m["a"])(h, v, f, !1, null, "eb39272a", null),
        b = _.exports,
        w = r("d3bd"),
        g = r.n(w),
        y = r("8dee"),
        j = r.n(y),
        k = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            { staticClass: "install-requirements" },
            [
              e.fetchingRequirements
                ? [
                    r("v-spinner", {
                      staticClass: "spinner",
                      attrs: { color: "#263238" },
                    }),
                  ]
                : e.error
                ? [
                    r(
                      "v-notice",
                      { attrs: { color: "danger", icon: "error" } },
                      [e._v(" " + e._s(e.error) + " ")]
                    ),
                  ]
                : e._l(
                    [
                      e.server,
                      e.phpVersion,
                      e.phpExtensions,
                      e.permissions,
                      e.directusVersion,
                    ],
                    function (t) {
                      return r(
                        "v-notice",
                        {
                          key: t.key,
                          attrs: {
                            color: t.success ? "success" : "warning",
                            icon: t.success ? "check" : "warning",
                          },
                        },
                        [
                          r("div", { staticClass: "content" }, [
                            e._v(" " + e._s(t.value) + " "),
                            !1 === t.success
                              ? r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://docs.directus.io/installation/git.html#step-1-make-sure-requirements-are-met",
                                      target: "__blank",
                                    },
                                  },
                                  [e._v(" " + e._s(e.$t("why")) + " ")]
                                )
                              : e._e(),
                          ]),
                        ]
                      );
                    }
                  ),
            ],
            2
          );
        },
        C = [],
        $ =
          (r("a623"),
          r("7db0"),
          r("caad"),
          r("a15b"),
          r("d81d"),
          r("b0c0"),
          r("ac1f"),
          r("2532"),
          r("1276"),
          r("8d61"));
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                Object(a["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var O = {
          name: "InstallRequirements",
          props: {
            superAdminToken: { type: String, required: !1, default: null },
          },
          data: function () {
            return {
              fetchingRequirements: !1,
              serverInfo: null,
              error: null,
              lastTag: null,
            };
          },
          computed: P({}, Object(l["e"])(["apiRootPath"]), {
            server: function () {
              if (!this.fetchingRequirements && null !== this.serverInfo)
                return {
                  key: "server",
                  success: this.serverInfo.server.type
                    .toLowerCase()
                    .includes("apache"),
                  value: this.serverInfo.server.type,
                };
            },
            phpVersion: function () {
              if (!this.fetchingRequirements && null !== this.serverInfo) {
                var e = this.serverInfo.php.version.split("-")[0],
                  t = "7.1.0";
                return {
                  key: "phpVersion",
                  success: Object($["satisfies"])(e, ">=".concat(t)),
                  value: "PHP ".concat(e),
                };
              }
            },
            phpExtensions: function () {
              var e = this;
              if (!this.fetchingRequirements && null !== this.serverInfo) {
                var t = Object.keys(this.serverInfo.php.extensions).map(
                    function (t) {
                      return {
                        key: t,
                        enabled: e.serverInfo.php.extensions[t],
                      };
                    }
                  ),
                  r = t.every(function (e) {
                    return e.enabled;
                  }),
                  s = this.$t("php_extensions");
                return (
                  !1 === r &&
                    (s +=
                      ": " +
                      this.$t("missing_value", {
                        value: t
                          .filter(function (e) {
                            return !1 === e.enabled;
                          })
                          .map(function (e) {
                            return e.key;
                          }),
                      })),
                  { key: "phpExtensions", success: r, value: s }
                );
              }
            },
            permissions: function () {
              var e = this;
              if (!this.fetchingRequirements && null !== this.serverInfo) {
                var t = Object.keys(this.serverInfo.permissions).map(function (
                    t
                  ) {
                    return { key: t, permission: e.serverInfo.permissions[t] };
                  }),
                  r = t.filter(function (e) {
                    return 7 !== +e.permission[1];
                  }),
                  s = 0 === r.length,
                  n = this.$t("write_access");
                return (
                  !1 === s &&
                    (n +=
                      ": " +
                      this.$t("value_not_writeable", {
                        value: r
                          .map(function (e) {
                            return "/".concat(e.key);
                          })
                          .join(", "),
                      })),
                  { key: "permissions", success: 0 === r.length, value: n }
                );
              }
            },
            directusVersion: function () {
              if (
                !this.fetchingRequirements &&
                null !== this.serverInfo &&
                null !== this.lastTag
              )
                return {
                  key: "directusVersion",
                  success: "v" + this.serverInfo.directus === this.lastTag,
                  value:
                    this.$t("directus_version") +
                    ": v" +
                    this.serverInfo.directus,
                };
            },
          }),
          created: function () {
            this.fetchRequirements();
          },
          methods: {
            fetchRequirements: function () {
              var e = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function t() {
                  var r, s, n, i, a, o;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.fetchingRequirements = !0),
                              (e.error = null),
                              (t.prev = 2),
                              (t.next = 5),
                              p.a.get(e.apiRootPath + "server/info", {
                                params: {
                                  super_admin_token: e.superAdminToken,
                                },
                              })
                            );
                          case 5:
                            (r = t.sent),
                              (e.serverInfo = r.data.data),
                              (t.next = 13);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t0 = t["catch"](2)),
                              (a =
                                null === (s = t.t0.response) || void 0 === s
                                  ? void 0
                                  : null === (n = s.data) || void 0 === n
                                  ? void 0
                                  : null === (i = n.error) || void 0 === i
                                  ? void 0
                                  : i.code),
                              (e.error =
                                3 === +a
                                  ? e.$t("wrong_super_admin_password")
                                  : t.t0.message);
                          case 13:
                            return (
                              (t.prev = 13),
                              (t.next = 16),
                              p.a.get(
                                "https://api.github.com/repos/directus/directus/tags"
                              )
                            );
                          case 16:
                            (o = t.sent),
                              (e.lastTag = o.data.find(function (e) {
                                return !1 === e.name.includes("-");
                              }).name),
                              (t.next = 23);
                            break;
                          case 20:
                            (t.prev = 20),
                              (t.t1 = t["catch"](13)),
                              console.log(
                                "Couldn't fetch latests version of Directus from GitHub"
                              );
                          case 23:
                            e.fetchingRequirements = !1;
                          case 24:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [
                      [2, 9],
                      [13, 20],
                    ]
                  );
                })
              )();
            },
          },
        },
        E = O,
        R = (r("4471"), Object(m["a"])(E, k, C, !1, null, "8fa51286", null)),
        S = R.exports;
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                Object(a["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var q = {
          name: "Install",
          components: {
            PublicView: o["a"],
            PublicNotice: c["a"],
            PublicStepper: b,
            InstallRequirements: S,
          },
          data: function () {
            return {
              step: 1,
              project_name: "",
              project: "",
              user_email: "",
              user_password: "",
              db_host: "localhost",
              notice: {
                text: this.$t("project_not_configured"),
                color: "blue-grey-100",
                icon: "outlined_flag",
              },
              db_port: 3306,
              db_user: "",
              db_password: "",
              db_name: "",
              installing: !1,
              error: null,
              manualKey: !1,
              super_admin_token: "",
              adminTokenValid: !1,
              fetchingRequirements: !1,
            };
          },
          computed: N({}, Object(l["e"])(["apiRootPath", "projects"]), {
            firstInstall: function () {
              return !1 === this.projects;
            },
          }),
          methods: N({}, Object(l["b"])(["getProjects"]), {
            generateMasterPassword: function () {
              for (var e = 2, t = "", r = 0; r <= e; r++) t += j.a.generate();
              return t;
            },
            onSubmit: function () {
              var e = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function t() {
                  var r, s, n, i, a, o, c, u, l, v, f, d, h, m, _;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (3 !== e.step) {
                              t.next = 3;
                              break;
                            }
                            return (e.step = 4), t.abrupt("return");
                          case 3:
                            return (
                              (e.step = 5),
                              (r = function () {
                                e.$notify({
                                  title: e.$t("api_installed"),
                                  color: "green",
                                  iconMain: "check",
                                }),
                                  (e.step = 6);
                              }),
                              (s = !1),
                              (n = !1),
                              setTimeout(function () {
                                (n = !0), s && n && r();
                              }, 4e3),
                              (i = e.project_name),
                              (a = e.project),
                              (o = e.user_email),
                              (c = e.user_password),
                              (u = e.db_host),
                              (l = e.db_port),
                              (v = e.db_user),
                              (f = e.db_password),
                              (d = e.db_name),
                              (t.prev = 9),
                              !0 === e.firstInstall &&
                                (e.super_admin_token =
                                  e.generateMasterPassword()),
                              (t.next = 13),
                              p.a.post(e.apiRootPath + "server/projects", {
                                project_name: i,
                                project: a,
                                user_email: o,
                                user_password: c,
                                db_host: u,
                                db_port: l,
                                db_user: v,
                                db_password: f,
                                db_name: d,
                                super_admin_token: e.super_admin_token,
                              })
                            );
                          case 13:
                            (s = !0), s && n && r(), (t.next = 23);
                            break;
                          case 17:
                            (t.prev = 17),
                              (t.t0 = t["catch"](9)),
                              (e.error = t.t0),
                              console.error(t.t0),
                              e.$events.emit("error", {
                                notify:
                                  null === (h = t.t0.response) || void 0 === h
                                    ? void 0
                                    : null === (m = h.data) || void 0 === m
                                    ? void 0
                                    : null === (_ = m.error) || void 0 === _
                                    ? void 0
                                    : _.message,
                                error: t.t0,
                              }),
                              (e.step = 4);
                          case 23:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[9, 17]]
                  );
                })
              )();
            },
            syncKey: function () {
              !1 === this.manualKey &&
                (this.project = g()(this.project_name, { lower: !0 }));
            },
            setProjectKey: function (e) {
              !1 === this.manualKey && (this.manualKey = !0);
              var t = g()(e.target.value, { lower: !0 });
              this.project = t;
            },
            goToLogin: function () {
              var e = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e.getProjects(!0);
                        case 2:
                          e.$router.push("/login", {
                            query: { project: e.project },
                          });
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          }),
        },
        T = q,
        V = (r("ac9c"), Object(m["a"])(T, s, n, !1, null, "447ffee0", null));
      t["default"] = V.exports;
    },
    8142: function (e, t, r) {},
    "8d61": function (e, t, r) {
      (function (r) {
        var s;
        (t = e.exports = ee),
          (s =
            "object" === typeof r &&
            Object({ NODE_ENV: "production", BASE_URL: "" }) &&
            Object({ NODE_ENV: "production", BASE_URL: "" }).NODE_DEBUG &&
            /\bsemver\b/i.test(
              Object({ NODE_ENV: "production", BASE_URL: "" }).NODE_DEBUG
            )
              ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift("SEMVER"), console.log.apply(console, e);
                }
              : function () {}),
          (t.SEMVER_SPEC_VERSION = "2.0.0");
        var n = 256,
          i = Number.MAX_SAFE_INTEGER || 9007199254740991,
          a = 16,
          o = (t.re = []),
          c = (t.src = []),
          u = 0,
          p = u++;
        c[p] = "0|[1-9]\\d*";
        var l = u++;
        c[l] = "[0-9]+";
        var v = u++;
        c[v] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
        var f = u++;
        c[f] = "(" + c[p] + ")\\.(" + c[p] + ")\\.(" + c[p] + ")";
        var d = u++;
        c[d] = "(" + c[l] + ")\\.(" + c[l] + ")\\.(" + c[l] + ")";
        var h = u++;
        c[h] = "(?:" + c[p] + "|" + c[v] + ")";
        var m = u++;
        c[m] = "(?:" + c[l] + "|" + c[v] + ")";
        var _ = u++;
        c[_] = "(?:-(" + c[h] + "(?:\\." + c[h] + ")*))";
        var b = u++;
        c[b] = "(?:-?(" + c[m] + "(?:\\." + c[m] + ")*))";
        var w = u++;
        c[w] = "[0-9A-Za-z-]+";
        var g = u++;
        c[g] = "(?:\\+(" + c[w] + "(?:\\." + c[w] + ")*))";
        var y = u++,
          j = "v?" + c[f] + c[_] + "?" + c[g] + "?";
        c[y] = "^" + j + "$";
        var k = "[v=\\s]*" + c[d] + c[b] + "?" + c[g] + "?",
          C = u++;
        c[C] = "^" + k + "$";
        var $ = u++;
        c[$] = "((?:<|>)?=?)";
        var x = u++;
        c[x] = c[l] + "|x|X|\\*";
        var P = u++;
        c[P] = c[p] + "|x|X|\\*";
        var O = u++;
        c[O] =
          "[v=\\s]*(" +
          c[P] +
          ")(?:\\.(" +
          c[P] +
          ")(?:\\.(" +
          c[P] +
          ")(?:" +
          c[_] +
          ")?" +
          c[g] +
          "?)?)?";
        var E = u++;
        c[E] =
          "[v=\\s]*(" +
          c[x] +
          ")(?:\\.(" +
          c[x] +
          ")(?:\\.(" +
          c[x] +
          ")(?:" +
          c[b] +
          ")?" +
          c[g] +
          "?)?)?";
        var R = u++;
        c[R] = "^" + c[$] + "\\s*" + c[O] + "$";
        var S = u++;
        c[S] = "^" + c[$] + "\\s*" + c[E] + "$";
        var I = u++;
        c[I] =
          "(?:^|[^\\d])(\\d{1," +
          a +
          "})(?:\\.(\\d{1," +
          a +
          "}))?(?:\\.(\\d{1," +
          a +
          "}))?(?:$|[^\\d])";
        var N = u++;
        c[N] = "(?:~>?)";
        var q = u++;
        (c[q] = "(\\s*)" + c[N] + "\\s+"), (o[q] = new RegExp(c[q], "g"));
        var T = "$1~",
          V = u++;
        c[V] = "^" + c[N] + c[O] + "$";
        var D = u++;
        c[D] = "^" + c[N] + c[E] + "$";
        var A = u++;
        c[A] = "(?:\\^)";
        var M = u++;
        (c[M] = "(\\s*)" + c[A] + "\\s+"), (o[M] = new RegExp(c[M], "g"));
        var L = "$1^",
          K = u++;
        c[K] = "^" + c[A] + c[O] + "$";
        var U = u++;
        c[U] = "^" + c[A] + c[E] + "$";
        var B = u++;
        c[B] = "^" + c[$] + "\\s*(" + k + ")$|^$";
        var X = u++;
        c[X] = "^" + c[$] + "\\s*(" + j + ")$|^$";
        var z = u++;
        (c[z] = "(\\s*)" + c[$] + "\\s*(" + k + "|" + c[O] + ")"),
          (o[z] = new RegExp(c[z], "g"));
        var G = "$1$2$3",
          Z = u++;
        c[Z] = "^\\s*(" + c[O] + ")\\s+-\\s+(" + c[O] + ")\\s*$";
        var H = u++;
        c[H] = "^\\s*(" + c[E] + ")\\s+-\\s+(" + c[E] + ")\\s*$";
        var J = u++;
        c[J] = "(<|>)?=?\\s*\\*";
        for (var F = 0; F < u; F++)
          s(F, c[F]), o[F] || (o[F] = new RegExp(c[F]));
        function Q(e, t) {
          if (
            ((t && "object" === typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof ee)
          )
            return e;
          if ("string" !== typeof e) return null;
          if (e.length > n) return null;
          var r = t.loose ? o[C] : o[y];
          if (!r.test(e)) return null;
          try {
            return new ee(e, t);
          } catch (s) {
            return null;
          }
        }
        function W(e, t) {
          var r = Q(e, t);
          return r ? r.version : null;
        }
        function Y(e, t) {
          var r = Q(e.trim().replace(/^[=v]+/, ""), t);
          return r ? r.version : null;
        }
        function ee(e, t) {
          if (
            ((t && "object" === typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof ee)
          ) {
            if (e.loose === t.loose) return e;
            e = e.version;
          } else if ("string" !== typeof e)
            throw new TypeError("Invalid Version: " + e);
          if (e.length > n)
            throw new TypeError("version is longer than " + n + " characters");
          if (!(this instanceof ee)) return new ee(e, t);
          s("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
          var r = e.trim().match(t.loose ? o[C] : o[y]);
          if (!r) throw new TypeError("Invalid Version: " + e);
          if (
            ((this.raw = e),
            (this.major = +r[1]),
            (this.minor = +r[2]),
            (this.patch = +r[3]),
            this.major > i || this.major < 0)
          )
            throw new TypeError("Invalid major version");
          if (this.minor > i || this.minor < 0)
            throw new TypeError("Invalid minor version");
          if (this.patch > i || this.patch < 0)
            throw new TypeError("Invalid patch version");
          r[4]
            ? (this.prerelease = r[4].split(".").map(function (e) {
                if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < i) return t;
                }
                return e;
              }))
            : (this.prerelease = []),
            (this.build = r[5] ? r[5].split(".") : []),
            this.format();
        }
        function te(e, t, r, s) {
          "string" === typeof r && ((s = r), (r = void 0));
          try {
            return new ee(e, r).inc(t, s).version;
          } catch (n) {
            return null;
          }
        }
        function re(e, t) {
          if (me(e, t)) return null;
          var r = Q(e),
            s = Q(t),
            n = "";
          if (r.prerelease.length || s.prerelease.length) {
            n = "pre";
            var i = "prerelease";
          }
          for (var a in r)
            if (
              ("major" === a || "minor" === a || "patch" === a) &&
              r[a] !== s[a]
            )
              return n + a;
          return i;
        }
        (t.parse = Q),
          (t.valid = W),
          (t.clean = Y),
          (t.SemVer = ee),
          (ee.prototype.format = function () {
            return (
              (this.version = this.major + "." + this.minor + "." + this.patch),
              this.prerelease.length &&
                (this.version += "-" + this.prerelease.join(".")),
              this.version
            );
          }),
          (ee.prototype.toString = function () {
            return this.version;
          }),
          (ee.prototype.compare = function (e) {
            return (
              s("SemVer.compare", this.version, this.options, e),
              e instanceof ee || (e = new ee(e, this.options)),
              this.compareMain(e) || this.comparePre(e)
            );
          }),
          (ee.prototype.compareMain = function (e) {
            return (
              e instanceof ee || (e = new ee(e, this.options)),
              ne(this.major, e.major) ||
                ne(this.minor, e.minor) ||
                ne(this.patch, e.patch)
            );
          }),
          (ee.prototype.comparePre = function (e) {
            if (
              (e instanceof ee || (e = new ee(e, this.options)),
              this.prerelease.length && !e.prerelease.length)
            )
              return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            var t = 0;
            do {
              var r = this.prerelease[t],
                n = e.prerelease[t];
              if (
                (s("prerelease compare", t, r, n), void 0 === r && void 0 === n)
              )
                return 0;
              if (void 0 === n) return 1;
              if (void 0 === r) return -1;
              if (r !== n) return ne(r, n);
            } while (++t);
          }),
          (ee.prototype.inc = function (e, t) {
            switch (e) {
              case "premajor":
                (this.prerelease.length = 0),
                  (this.patch = 0),
                  (this.minor = 0),
                  this.major++,
                  this.inc("pre", t);
                break;
              case "preminor":
                (this.prerelease.length = 0),
                  (this.patch = 0),
                  this.minor++,
                  this.inc("pre", t);
                break;
              case "prepatch":
                (this.prerelease.length = 0),
                  this.inc("patch", t),
                  this.inc("pre", t);
                break;
              case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t),
                  this.inc("pre", t);
                break;
              case "major":
                (0 === this.minor &&
                  0 === this.patch &&
                  0 !== this.prerelease.length) ||
                  this.major++,
                  (this.minor = 0),
                  (this.patch = 0),
                  (this.prerelease = []);
                break;
              case "minor":
                (0 === this.patch && 0 !== this.prerelease.length) ||
                  this.minor++,
                  (this.patch = 0),
                  (this.prerelease = []);
                break;
              case "patch":
                0 === this.prerelease.length && this.patch++,
                  (this.prerelease = []);
                break;
              case "pre":
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                  var r = this.prerelease.length;
                  while (--r >= 0)
                    "number" === typeof this.prerelease[r] &&
                      (this.prerelease[r]++, (r = -2));
                  -1 === r && this.prerelease.push(0);
                }
                t &&
                  (this.prerelease[0] === t
                    ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                    : (this.prerelease = [t, 0]));
                break;
              default:
                throw new Error("invalid increment argument: " + e);
            }
            return this.format(), (this.raw = this.version), this;
          }),
          (t.inc = te),
          (t.diff = re),
          (t.compareIdentifiers = ne);
        var se = /^[0-9]+$/;
        function ne(e, t) {
          var r = se.test(e),
            s = se.test(t);
          return (
            r && s && ((e = +e), (t = +t)),
            e === t ? 0 : r && !s ? -1 : s && !r ? 1 : e < t ? -1 : 1
          );
        }
        function ie(e, t) {
          return ne(t, e);
        }
        function ae(e, t) {
          return new ee(e, t).major;
        }
        function oe(e, t) {
          return new ee(e, t).minor;
        }
        function ce(e, t) {
          return new ee(e, t).patch;
        }
        function ue(e, t, r) {
          return new ee(e, r).compare(new ee(t, r));
        }
        function pe(e, t) {
          return ue(e, t, !0);
        }
        function le(e, t, r) {
          return ue(t, e, r);
        }
        function ve(e, r) {
          return e.sort(function (e, s) {
            return t.compare(e, s, r);
          });
        }
        function fe(e, r) {
          return e.sort(function (e, s) {
            return t.rcompare(e, s, r);
          });
        }
        function de(e, t, r) {
          return ue(e, t, r) > 0;
        }
        function he(e, t, r) {
          return ue(e, t, r) < 0;
        }
        function me(e, t, r) {
          return 0 === ue(e, t, r);
        }
        function _e(e, t, r) {
          return 0 !== ue(e, t, r);
        }
        function be(e, t, r) {
          return ue(e, t, r) >= 0;
        }
        function we(e, t, r) {
          return ue(e, t, r) <= 0;
        }
        function ge(e, t, r, s) {
          switch (t) {
            case "===":
              return (
                "object" === typeof e && (e = e.version),
                "object" === typeof r && (r = r.version),
                e === r
              );
            case "!==":
              return (
                "object" === typeof e && (e = e.version),
                "object" === typeof r && (r = r.version),
                e !== r
              );
            case "":
            case "=":
            case "==":
              return me(e, r, s);
            case "!=":
              return _e(e, r, s);
            case ">":
              return de(e, r, s);
            case ">=":
              return be(e, r, s);
            case "<":
              return he(e, r, s);
            case "<=":
              return we(e, r, s);
            default:
              throw new TypeError("Invalid operator: " + t);
          }
        }
        function ye(e, t) {
          if (
            ((t && "object" === typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof ye)
          ) {
            if (e.loose === !!t.loose) return e;
            e = e.value;
          }
          if (!(this instanceof ye)) return new ye(e, t);
          s("comparator", e, t),
            (this.options = t),
            (this.loose = !!t.loose),
            this.parse(e),
            this.semver === je
              ? (this.value = "")
              : (this.value = this.operator + this.semver.version),
            s("comp", this);
        }
        (t.rcompareIdentifiers = ie),
          (t.major = ae),
          (t.minor = oe),
          (t.patch = ce),
          (t.compare = ue),
          (t.compareLoose = pe),
          (t.rcompare = le),
          (t.sort = ve),
          (t.rsort = fe),
          (t.gt = de),
          (t.lt = he),
          (t.eq = me),
          (t.neq = _e),
          (t.gte = be),
          (t.lte = we),
          (t.cmp = ge),
          (t.Comparator = ye);
        var je = {};
        function ke(e, t) {
          if (
            ((t && "object" === typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof ke)
          )
            return e.loose === !!t.loose &&
              e.includePrerelease === !!t.includePrerelease
              ? e
              : new ke(e.raw, t);
          if (e instanceof ye) return new ke(e.value, t);
          if (!(this instanceof ke)) return new ke(e, t);
          if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e),
            (this.set = e
              .split(/\s*\|\|\s*/)
              .map(function (e) {
                return this.parseRange(e.trim());
              }, this)
              .filter(function (e) {
                return e.length;
              })),
            !this.set.length)
          )
            throw new TypeError("Invalid SemVer Range: " + e);
          this.format();
        }
        function Ce(e, t) {
          return new ke(e, t).set.map(function (e) {
            return e
              .map(function (e) {
                return e.value;
              })
              .join(" ")
              .trim()
              .split(" ");
          });
        }
        function $e(e, t) {
          return (
            s("comp", e, t),
            (e = Ee(e, t)),
            s("caret", e),
            (e = Pe(e, t)),
            s("tildes", e),
            (e = Se(e, t)),
            s("xrange", e),
            (e = Ne(e, t)),
            s("stars", e),
            e
          );
        }
        function xe(e) {
          return !e || "x" === e.toLowerCase() || "*" === e;
        }
        function Pe(e, t) {
          return e
            .trim()
            .split(/\s+/)
            .map(function (e) {
              return Oe(e, t);
            })
            .join(" ");
        }
        function Oe(e, t) {
          var r = t.loose ? o[D] : o[V];
          return e.replace(r, function (t, r, n, i, a) {
            var o;
            return (
              s("tilde", e, t, r, n, i, a),
              xe(r)
                ? (o = "")
                : xe(n)
                ? (o = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0")
                : xe(i)
                ? (o = ">=" + r + "." + n + ".0 <" + r + "." + (+n + 1) + ".0")
                : a
                ? (s("replaceTilde pr", a),
                  (o =
                    ">=" +
                    r +
                    "." +
                    n +
                    "." +
                    i +
                    "-" +
                    a +
                    " <" +
                    r +
                    "." +
                    (+n + 1) +
                    ".0"))
                : (o =
                    ">=" +
                    r +
                    "." +
                    n +
                    "." +
                    i +
                    " <" +
                    r +
                    "." +
                    (+n + 1) +
                    ".0"),
              s("tilde return", o),
              o
            );
          });
        }
        function Ee(e, t) {
          return e
            .trim()
            .split(/\s+/)
            .map(function (e) {
              return Re(e, t);
            })
            .join(" ");
        }
        function Re(e, t) {
          s("caret", e, t);
          var r = t.loose ? o[U] : o[K];
          return e.replace(r, function (t, r, n, i, a) {
            var o;
            return (
              s("caret", e, t, r, n, i, a),
              xe(r)
                ? (o = "")
                : xe(n)
                ? (o = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0")
                : xe(i)
                ? (o =
                    "0" === r
                      ? ">=" + r + "." + n + ".0 <" + r + "." + (+n + 1) + ".0"
                      : ">=" + r + "." + n + ".0 <" + (+r + 1) + ".0.0")
                : a
                ? (s("replaceCaret pr", a),
                  (o =
                    "0" === r
                      ? "0" === n
                        ? ">=" +
                          r +
                          "." +
                          n +
                          "." +
                          i +
                          "-" +
                          a +
                          " <" +
                          r +
                          "." +
                          n +
                          "." +
                          (+i + 1)
                        : ">=" +
                          r +
                          "." +
                          n +
                          "." +
                          i +
                          "-" +
                          a +
                          " <" +
                          r +
                          "." +
                          (+n + 1) +
                          ".0"
                      : ">=" +
                        r +
                        "." +
                        n +
                        "." +
                        i +
                        "-" +
                        a +
                        " <" +
                        (+r + 1) +
                        ".0.0"))
                : (s("no pr"),
                  (o =
                    "0" === r
                      ? "0" === n
                        ? ">=" +
                          r +
                          "." +
                          n +
                          "." +
                          i +
                          " <" +
                          r +
                          "." +
                          n +
                          "." +
                          (+i + 1)
                        : ">=" +
                          r +
                          "." +
                          n +
                          "." +
                          i +
                          " <" +
                          r +
                          "." +
                          (+n + 1) +
                          ".0"
                      : ">=" +
                        r +
                        "." +
                        n +
                        "." +
                        i +
                        " <" +
                        (+r + 1) +
                        ".0.0")),
              s("caret return", o),
              o
            );
          });
        }
        function Se(e, t) {
          return (
            s("replaceXRanges", e, t),
            e
              .split(/\s+/)
              .map(function (e) {
                return Ie(e, t);
              })
              .join(" ")
          );
        }
        function Ie(e, t) {
          e = e.trim();
          var r = t.loose ? o[S] : o[R];
          return e.replace(r, function (t, r, n, i, a, o) {
            s("xRange", e, t, r, n, i, a, o);
            var c = xe(n),
              u = c || xe(i),
              p = u || xe(a),
              l = p;
            return (
              "=" === r && l && (r = ""),
              c
                ? (t = ">" === r || "<" === r ? "<0.0.0" : "*")
                : r && l
                ? (u && (i = 0),
                  (a = 0),
                  ">" === r
                    ? ((r = ">="),
                      u
                        ? ((n = +n + 1), (i = 0), (a = 0))
                        : ((i = +i + 1), (a = 0)))
                    : "<=" === r &&
                      ((r = "<"), u ? (n = +n + 1) : (i = +i + 1)),
                  (t = r + n + "." + i + "." + a))
                : u
                ? (t = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                : p &&
                  (t = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0"),
              s("xRange return", t),
              t
            );
          });
        }
        function Ne(e, t) {
          return s("replaceStars", e, t), e.trim().replace(o[J], "");
        }
        function qe(e, t, r, s, n, i, a, o, c, u, p, l, v) {
          return (
            (t = xe(r)
              ? ""
              : xe(s)
              ? ">=" + r + ".0.0"
              : xe(n)
              ? ">=" + r + "." + s + ".0"
              : ">=" + t),
            (o = xe(c)
              ? ""
              : xe(u)
              ? "<" + (+c + 1) + ".0.0"
              : xe(p)
              ? "<" + c + "." + (+u + 1) + ".0"
              : l
              ? "<=" + c + "." + u + "." + p + "-" + l
              : "<=" + o),
            (t + " " + o).trim()
          );
        }
        function Te(e, t, r) {
          for (var n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
          if (t.prerelease.length && !r.includePrerelease) {
            for (n = 0; n < e.length; n++)
              if (
                (s(e[n].semver),
                e[n].semver !== je && e[n].semver.prerelease.length > 0)
              ) {
                var i = e[n].semver;
                if (
                  i.major === t.major &&
                  i.minor === t.minor &&
                  i.patch === t.patch
                )
                  return !0;
              }
            return !1;
          }
          return !0;
        }
        function Ve(e, t, r) {
          try {
            t = new ke(t, r);
          } catch (s) {
            return !1;
          }
          return t.test(e);
        }
        function De(e, t, r) {
          var s = null,
            n = null;
          try {
            var i = new ke(t, r);
          } catch (a) {
            return null;
          }
          return (
            e.forEach(function (e) {
              i.test(e) &&
                ((s && -1 !== n.compare(e)) || ((s = e), (n = new ee(s, r))));
            }),
            s
          );
        }
        function Ae(e, t, r) {
          var s = null,
            n = null;
          try {
            var i = new ke(t, r);
          } catch (a) {
            return null;
          }
          return (
            e.forEach(function (e) {
              i.test(e) &&
                ((s && 1 !== n.compare(e)) || ((s = e), (n = new ee(s, r))));
            }),
            s
          );
        }
        function Me(e, t) {
          e = new ke(e, t);
          var r = new ee("0.0.0");
          if (e.test(r)) return r;
          if (((r = new ee("0.0.0-0")), e.test(r))) return r;
          r = null;
          for (var s = 0; s < e.set.length; ++s) {
            var n = e.set[s];
            n.forEach(function (e) {
              var t = new ee(e.semver.version);
              switch (e.operator) {
                case ">":
                  0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                    (t.raw = t.format());
                case "":
                case ">=":
                  (r && !de(r, t)) || (r = t);
                  break;
                case "<":
                case "<=":
                  break;
                default:
                  throw new Error("Unexpected operation: " + e.operator);
              }
            });
          }
          return r && e.test(r) ? r : null;
        }
        function Le(e, t) {
          try {
            return new ke(e, t).range || "*";
          } catch (r) {
            return null;
          }
        }
        function Ke(e, t, r) {
          return Be(e, t, "<", r);
        }
        function Ue(e, t, r) {
          return Be(e, t, ">", r);
        }
        function Be(e, t, r, s) {
          var n, i, a, o, c;
          switch (((e = new ee(e, s)), (t = new ke(t, s)), r)) {
            case ">":
              (n = de), (i = we), (a = he), (o = ">"), (c = ">=");
              break;
            case "<":
              (n = he), (i = be), (a = de), (o = "<"), (c = "<=");
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
          if (Ve(e, t, s)) return !1;
          for (var u = 0; u < t.set.length; ++u) {
            var p = t.set[u],
              l = null,
              v = null;
            if (
              (p.forEach(function (e) {
                e.semver === je && (e = new ye(">=0.0.0")),
                  (l = l || e),
                  (v = v || e),
                  n(e.semver, l.semver, s)
                    ? (l = e)
                    : a(e.semver, v.semver, s) && (v = e);
              }),
              l.operator === o || l.operator === c)
            )
              return !1;
            if ((!v.operator || v.operator === o) && i(e, v.semver)) return !1;
            if (v.operator === c && a(e, v.semver)) return !1;
          }
          return !0;
        }
        function Xe(e, t) {
          var r = Q(e, t);
          return r && r.prerelease.length ? r.prerelease : null;
        }
        function ze(e, t, r) {
          return (e = new ke(e, r)), (t = new ke(t, r)), e.intersects(t);
        }
        function Ge(e) {
          if (e instanceof ee) return e;
          if ("string" !== typeof e) return null;
          var t = e.match(o[I]);
          return null == t
            ? null
            : Q(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
        }
        (ye.prototype.parse = function (e) {
          var t = this.options.loose ? o[B] : o[X],
            r = e.match(t);
          if (!r) throw new TypeError("Invalid comparator: " + e);
          (this.operator = r[1]),
            "=" === this.operator && (this.operator = ""),
            r[2]
              ? (this.semver = new ee(r[2], this.options.loose))
              : (this.semver = je);
        }),
          (ye.prototype.toString = function () {
            return this.value;
          }),
          (ye.prototype.test = function (e) {
            return (
              s("Comparator.test", e, this.options.loose),
              this.semver === je ||
                ("string" === typeof e && (e = new ee(e, this.options)),
                ge(e, this.operator, this.semver, this.options))
            );
          }),
          (ye.prototype.intersects = function (e, t) {
            if (!(e instanceof ye))
              throw new TypeError("a Comparator is required");
            var r;
            if (
              ((t && "object" === typeof t) ||
                (t = { loose: !!t, includePrerelease: !1 }),
              "" === this.operator)
            )
              return (r = new ke(e.value, t)), Ve(this.value, r, t);
            if ("" === e.operator)
              return (r = new ke(this.value, t)), Ve(e.semver, r, t);
            var s =
                (">=" === this.operator || ">" === this.operator) &&
                (">=" === e.operator || ">" === e.operator),
              n =
                ("<=" === this.operator || "<" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
              i = this.semver.version === e.semver.version,
              a =
                (">=" === this.operator || "<=" === this.operator) &&
                (">=" === e.operator || "<=" === e.operator),
              o =
                ge(this.semver, "<", e.semver, t) &&
                (">=" === this.operator || ">" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
              c =
                ge(this.semver, ">", e.semver, t) &&
                ("<=" === this.operator || "<" === this.operator) &&
                (">=" === e.operator || ">" === e.operator);
            return s || n || (i && a) || o || c;
          }),
          (t.Range = ke),
          (ke.prototype.format = function () {
            return (
              (this.range = this.set
                .map(function (e) {
                  return e.join(" ").trim();
                })
                .join("||")
                .trim()),
              this.range
            );
          }),
          (ke.prototype.toString = function () {
            return this.range;
          }),
          (ke.prototype.parseRange = function (e) {
            var t = this.options.loose;
            e = e.trim();
            var r = t ? o[H] : o[Z];
            (e = e.replace(r, qe)),
              s("hyphen replace", e),
              (e = e.replace(o[z], G)),
              s("comparator trim", e, o[z]),
              (e = e.replace(o[q], T)),
              (e = e.replace(o[M], L)),
              (e = e.split(/\s+/).join(" "));
            var n = t ? o[B] : o[X],
              i = e
                .split(" ")
                .map(function (e) {
                  return $e(e, this.options);
                }, this)
                .join(" ")
                .split(/\s+/);
            return (
              this.options.loose &&
                (i = i.filter(function (e) {
                  return !!e.match(n);
                })),
              (i = i.map(function (e) {
                return new ye(e, this.options);
              }, this)),
              i
            );
          }),
          (ke.prototype.intersects = function (e, t) {
            if (!(e instanceof ke)) throw new TypeError("a Range is required");
            return this.set.some(function (r) {
              return r.every(function (r) {
                return e.set.some(function (e) {
                  return e.every(function (e) {
                    return r.intersects(e, t);
                  });
                });
              });
            });
          }),
          (t.toComparators = Ce),
          (ke.prototype.test = function (e) {
            if (!e) return !1;
            "string" === typeof e && (e = new ee(e, this.options));
            for (var t = 0; t < this.set.length; t++)
              if (Te(this.set[t], e, this.options)) return !0;
            return !1;
          }),
          (t.satisfies = Ve),
          (t.maxSatisfying = De),
          (t.minSatisfying = Ae),
          (t.minVersion = Me),
          (t.validRange = Le),
          (t.ltr = Ke),
          (t.gtr = Ue),
          (t.outside = Be),
          (t.prerelease = Xe),
          (t.intersects = ze),
          (t.coerce = Ge);
      }).call(this, r("4362"));
    },
    a623: function (e, t, r) {
      "use strict";
      var s = r("23e7"),
        n = r("b727").every,
        i = r("a640"),
        a = r("ae40"),
        o = i("every"),
        c = a("every");
      s(
        { target: "Array", proto: !0, forced: !o || !c },
        {
          every: function (e) {
            return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    ac9c: function (e, t, r) {
      "use strict";
      var s = r("34ad"),
        n = r.n(s);
      n.a;
    },
    ca64: function (e, t, r) {
      "use strict";
      var s = r("8142"),
        n = r.n(s);
      n.a;
    },
  },
]);
//# sourceMappingURL=install.d012459f.js.map
