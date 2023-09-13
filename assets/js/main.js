AOS.init();

Fancybox.bind('[data-fancybox="e-commerce"]');
Fancybox.bind('[data-fancybox="crud"]');
Fancybox.bind('[data-fancybox="store"]');
Fancybox.bind('[data-fancybox="pizza-rtx"]');
Fancybox.bind('[data-fancybox="photo"]');
Fancybox.bind('[data-fancybox="note"]');
Fancybox.bind('[data-fancybox="car"]');
Fancybox.bind('[data-fancybox="wiki"]');
Fancybox.bind('[data-fancybox="pizza"]');
Fancybox.bind('[data-fancybox="promptGen"]');
Fancybox.bind('[data-fancybox="myNews"]');

!(function () {
    var e = {
            919: function () {
                (() => {
                    let e = (e, r) => [
                            "active",
                            `${e}-0`,
                            `w-[${r || "220px"}]`,
                        ],
                        r = (e) => [`${e}-0`, "w-0"],
                        a = document.querySelectorAll(".drawer");
                    if (a) {
                        function t() {
                            window.innerWidth > 768 &&
                                a.forEach((a) => {
                                    let { classList: t } = a,
                                        { placement: l, drawerWidth: s } =
                                            a.dataset;
                                    t.remove(...e(l, s)), t.add(...r(l));
                                });
                        }
                        (window.onresize = t),
                            (window.onload = t),
                            a.forEach((t) => {
                                let {
                                    placement: l,
                                    drawerWidth: s,
                                    drawerName: o,
                                } = t.dataset;
                                document
                                    .querySelectorAll(".drawer-handler")
                                    .forEach((i) => {
                                        let { targetDrawer: $ } = i.dataset;
                                        i.addEventListener("click", () => {
                                            if ($ === o) {
                                                let { classList: i } = t;
                                                i.contains("active")
                                                    ? (i.remove(...e(l, s)),
                                                      i.add(...r(l)))
                                                    : (i.remove(...r(l)),
                                                      i.add(...e(l, s)));
                                            } else
                                                a.forEach((a) => {
                                                    let { classList: t } = a,
                                                        {
                                                            placement: l,
                                                            drawerWidth: s,
                                                            drawerName: o,
                                                        } = a.dataset;
                                                    $ !== o &&
                                                        (t.remove(...e(l, s)),
                                                        t.add(...r(l)));
                                                });
                                        });
                                    });
                            });
                    }
                })();
            },
            215: function () {
                (() => {
                    let e = ["top-0", "left-0", "right-0", "mx-auto"],
                        r = [
                            "fixed",
                            ...e,
                            "bg-white",
                            "dark:bg-dark",
                            "shadow-default",
                            "py-3",
                        ],
                        a = ["absolute", ...e, "bg-transparent", "py-5"];
                    document.querySelectorAll(".navbar").forEach((t) => {
                        let l = t.dataset.navbarVersion;
                        "sticky" === t.dataset.positionStyle &&
                            (t.classList.add("absolute", ...e),
                            window.addEventListener("scroll", () => {
                                let e = window.pageYOffset;
                                "v1" === l
                                    ? (e > 100 &&
                                          (t.classList.remove(...a),
                                          t.classList.add(...r)),
                                      0 === e &&
                                          (t.classList.remove(...r),
                                          t.classList.add(...a)))
                                    : (e > 100 &&
                                          (t.classList.remove(...a),
                                          t.classList.add(...r),
                                          t
                                              .querySelectorAll(".search-box")
                                              .forEach((e) => {
                                                  let r =
                                                          e.getElementsByTagName(
                                                              "input"
                                                          )[0],
                                                      a =
                                                          e.getElementsByTagName(
                                                              "svg"
                                                          )[0];
                                                  r.classList.remove(
                                                      "text-primary-100",
                                                      "placeholder:text-primary-100"
                                                  ),
                                                      r.classList.add(
                                                          "text-gray-700",
                                                          "placeholder:text-gray-700"
                                                      ),
                                                      a.classList.remove(
                                                          "fill-primary-100"
                                                      ),
                                                      a.classList.add(
                                                          "fill-gray-700"
                                                      );
                                              }),
                                          t
                                              .querySelectorAll(".nav-text")
                                              .forEach((e) => {
                                                  e.classList.remove(
                                                      "text-white",
                                                      "hover:text-gray-300",
                                                      "dark:hover:text-gray-300"
                                                  ),
                                                      e.classList.add(
                                                          "text-gray-900",
                                                          "hover:text-primary-500",
                                                          "dark:hover:text-primary-500"
                                                      ),
                                                      e
                                                          .querySelectorAll(
                                                              "svg"
                                                          )
                                                          .forEach((e) => {
                                                              e.classList.remove(
                                                                  "fill-white",
                                                                  "group-hover:fill-gray-300"
                                                              ),
                                                                  e.classList.add(
                                                                      "fill-gray-900",
                                                                      "group-hover:fill-primary-500"
                                                                  );
                                                          });
                                              }),
                                          t
                                              .querySelectorAll(".svg-button")
                                              .forEach((e) => {
                                                  e.classList.replace(
                                                      "hover:border-gray-500",
                                                      "hover:border-primary-500"
                                                  ),
                                                      e
                                                          .querySelectorAll(
                                                              "svg"
                                                          )
                                                          .forEach((e) => {
                                                              e.classList.remove(
                                                                  "fill-white",
                                                                  "group-hover:fill-gray-300"
                                                              ),
                                                                  e.classList.add(
                                                                      "fill-gray-700",
                                                                      "group-hover:fill-primary-500"
                                                                  );
                                                          });
                                              })),
                                      0 === e &&
                                          (t.classList.remove(...r),
                                          t.classList.add(...a),
                                          t
                                              .querySelectorAll(".search-box")
                                              .forEach((e) => {
                                                  let r =
                                                          e.getElementsByTagName(
                                                              "input"
                                                          )[0],
                                                      a =
                                                          e.getElementsByTagName(
                                                              "svg"
                                                          )[0];
                                                  r.classList.add(
                                                      "text-primary-100",
                                                      "placeholder:text-primary-100"
                                                  ),
                                                      r.classList.remove(
                                                          "text-gray-700",
                                                          "placeholder:text-gray-700"
                                                      ),
                                                      a.classList.add(
                                                          "fill-primary-100"
                                                      ),
                                                      a.classList.remove(
                                                          "fill-gray-700"
                                                      );
                                              }),
                                          t
                                              .querySelectorAll(".nav-text")
                                              .forEach((e) => {
                                                  e.classList.add(
                                                      "text-white",
                                                      "hover:text-gray-300",
                                                      "dark:hover:text-gray-300"
                                                  ),
                                                      e.classList.remove(
                                                          "text-gray-900",
                                                          "hover:text-primary-500",
                                                          "dark:hover:text-primary-500"
                                                      ),
                                                      e
                                                          .querySelectorAll(
                                                              "svg"
                                                          )
                                                          .forEach((e) => {
                                                              e.classList.add(
                                                                  "fill-white",
                                                                  "group-hover:fill-gray-300"
                                                              ),
                                                                  e.classList.remove(
                                                                      "fill-gray-900",
                                                                      "group-hover:fill-primary-500"
                                                                  );
                                                          });
                                              }),
                                          t
                                              .querySelectorAll(".svg-button")
                                              .forEach((e) => {
                                                  e.classList.replace(
                                                      "hover:border-primary-500",
                                                      "hover:border-gray-500"
                                                  ),
                                                      e
                                                          .querySelectorAll(
                                                              "svg"
                                                          )
                                                          .forEach((e) => {
                                                              e.classList.add(
                                                                  "fill-white",
                                                                  "group-hover:fill-gray-300"
                                                              ),
                                                                  e.classList.remove(
                                                                      "fill-gray-700",
                                                                      "group-hover:fill-primary-500"
                                                                  );
                                                          });
                                              })));
                            }));
                    });
                })();
            },
        },
        r = {};
    function a(t) {
        var l = r[t];
        if (void 0 !== l) return l.exports;
        var s = (r[t] = { exports: {} });
        return e[t](s, s.exports, a), s.exports;
    }
    a(215), a(919);
})();
