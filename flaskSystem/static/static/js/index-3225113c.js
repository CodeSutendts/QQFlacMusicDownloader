import {
  o as e,
  c as t,
  a as l,
  G as a,
  ag as n,
  u as o,
  M as i,
  U as r,
  r as s,
  b as u,
  O as c,
  J as d,
  S as f,
  F as h,
  a7 as v,
  T as m,
  P as g,
  aj as y,
  R as b,
  ax as w,
  ay as k,
  h as _,
  az as C,
  a8 as I,
  Y as M,
  I as S,
  j as V,
  aA as x,
} from "./@vue-23ec300c.js";
import { E as U, a as z, b as j, i as A } from "./element-plus-2f2b1775.js";
import { n as L, p as B } from "./@vueuse-745bbec7.js";
import { d as D, s as P, c as H } from "./pinia-18d02a46.js";
import { Q as F, R as T, M as E } from "./@element-plus-d11130d4.js";
import { a as N } from "./axios-a8ee11a1.js";
import { u as q, a as R, c as O, b as K } from "./vue-router-af40f048.js";
import { Q } from "./qrcode.vue-ca8a58dd.js";
import { s as J } from "./pinia-plugin-persistedstate-d2bd58cf.js";
import "./lodash-es-3125e237.js";
import "./@popperjs-b78c3215.js";
import "./@ctrl-91de2ec7.js";
import "./dayjs-4609adfa.js";
import "./async-validator-cf877c1f.js";
import "./memoize-one-63ab667a.js";
import "./escape-html-c01bf6ee.js";
import "./normalize-wheel-es-3222b0a2.js";
import "./@floating-ui-48c6ca17.js";
import "./vue-demi-71ba0ef2.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const l of e)
        if ("childList" === l.type)
          for (const e of l.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const Z = { viewBox: "0 0 32 32", width: "1.2em", height: "1.2em" },
  Y = [
    l(
      "path",
      {
        fill: "currentColor",
        d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z",
      },
      null,
      -1
    ),
  ];
const W = {
    name: "carbon-sun",
    render: function (l, a) {
      return e(), t("svg", Z, Y);
    },
  },
  G = { viewBox: "0 0 32 32", width: "1.2em", height: "1.2em" },
  X = [
    l(
      "path",
      {
        fill: "currentColor",
        d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z",
      },
      null,
      -1
    ),
  ];
const $ = {
    name: "carbon-moon",
    render: function (l, a) {
      return e(), t("svg", G, X);
    },
  },
  ee = D("basicStore", {
    state: () => ({
      firstOpen: !0,
      token: "",
      searchHistory: [],
      lastSearch: "",
      filterKeys: [
        "DJ",
        "Remix",
        "即兴",
        "变调",
        "Live",
        "伴奏",
        "版,",
        "版)",
        "慢四",
        "纯音乐",
        "二胡",
        "串烧",
        "现场",
      ],
      config: {
        onlyMatchSearchKey: !1,
        ignoreNoAlbumSongs: !1,
        classificationMusicFile: !1,
        disableFilterKey: !1,
        concurrency: { num: 16, downloadFolder: "", saveLyric: !1 },
        platform: "qq",
      },
      MusicMetaPrepare: [{ platform: "mg", metas: [] }],
      netease: { isLogin: !1, token: "", anonimousCookie: "", user: {} },
    }),
    getters: {},
    actions: { initEnv() {} },
    persist: !0,
  }),
  te = () => ({ basicStore: ee() }),
  le = P,
  ae = { class: "App" },
  ne = (e, t) => {
    const l = e.__vccOpts || e;
    for (const [a, n] of t) l[a] = n;
    return l;
  },
  oe = ne(
    a({
      __name: "App",
      setup(a) {
        const s = L(),
          u = B(s),
          c = te(),
          { basicStore: d } = c;
        return (
          d.initEnv(),
          (a, c) => {
            const d = $,
              p = W,
              f = n("router-view");
            return (
              e(),
              t("div", ae, [
                l(
                  "button",
                  { class: "switch", onClick: c[0] || (c[0] = (e) => o(u)()) },
                  [o(s) ? (e(), i(d, { key: 0 })) : (e(), i(p, { key: 1 }))]
                ),
                r(f),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-70bacd07"]]
  ),
  ie = N.create({
    baseURL: "",
    timeout: 15e3,
    headers: {
      "Content-Type": "multipart/form-data;application/json;charset=UTF-8;",
    },
  });
ie.interceptors.request.use(
  (e) => ((e.headers.token = "test"), e),
  (e) => Promise.resolve(e)
),
  ie.interceptors.response.use(
    (e) => e,
    (e) => Promise.resolve(e)
  );
const re = ie,
  se = {
    pack: (e) => e.data,
    async get(e) {
      const t = await re.get(e);
      return this.pack(t);
    },
    async post(e, t) {
      const l = await re.post(e, t, {
        headers: { "Content-Type": "application/json" },
      });
      return this.pack(l);
    },
    async status() {
      return this.get("/status");
    },
    async searchMusic(e, t, l = "qq", a = 30, n = "") {
      let o = "/" + l + "/search/" + e + "/" + t + "/" + a + n;
      return this.get(o);
    },
    async getKWToken() {
      return this.get("/kw/search/getToken");
    },
    async searchMusicForMyFreeMp3(
      e = "myfreemp3",
      t = { page: 1, text: "", token: "", type: "YQM", v: "beta" }
    ) {
      let l = "/" + e + "/search";
      return this.post(l, t);
    },
    postDownload(e, t) {
      return this.post("/download", { music: e, config: t });
    },
    setBaseConfig(e) {
      return this.post("/config", e);
    },
    getBaseConfig() {
      return this.get("/getConfig");
    },
    getNeteaseQRCode() {
      return this.get("/es/qrLogin");
    },
    checkESState: (e) => se.get("/es/checkLoginState/" + e),
    getNetEaseUserInfo: () => se.get("/es/getUserInfo"),
    setESCookie: (e) => se.post("/es/setCookie", e),
    initAnonimous: () => se.get("/es/initAnonimous"),
    getUserPlaylist: (e) => se.get("/es/getUserPlaylist/" + e),
    getMusicListByPlaylistID: (e, t, l) =>
      se.get(`/es/getMusicListByPlaylistID/${e}/${t}/${l}`),
    getNeteaseCloud: () => se.get(`/es/getCloud?${Date.now()}`),
    delNeteaseCloud: () => se.get("/es/getCloud"),
    bindSid2Asid: (e) => se.post("/es/bindSid2Asid", e),
    esLogout: () => se.get("/es/esLogout"),
    getLocalFiles: () => se.get("/files/getAllFileList"),
  };
function ue(e) {
  let t = new Date(e);
  return (
    t.getFullYear() +
    "-" +
    ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) +
      "-") +
    ((t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) + " ") +
    ((t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":") +
    ((t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + ":") +
    (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds())
  );
}
const ce = [
    { name: "QQ音乐", value: "qq" },
    { name: "网易云音乐", value: "wyy" },
    { name: "酷我音乐", value: "kw" },
    { name: "咪咕音乐", value: "mg" },
    { name: "MyFreeMP3", value: "myfreemp3" },
  ],
  de = {
    qq: "QQ音乐",
    wyy: "网易云音乐",
    kw: "酷我音乐",
    mg: "咪咕音乐",
    myfreemp3: "MyFreeMP3",
  },
  pe = { iTunes: "Apple Music", QQMusic: "QQ音乐" },
  fe = { albumName: "专辑名称", songer: "歌手名称", title: "歌曲名称" },
  he = {
    reflect: { name: "看作", lint: "如果是" },
    replace: { name: "替换", lint: "将字符" },
  },
  ve = (e) => (w("data-v-ea4826d2"), (e = e()), k(), e),
  me = { class: "content" },
  ge = ve(() => l("span", null, " | ", -1)),
  ye = ve(() => l("span", null, "曲库流浪计划", -1)),
  be = { class: "cards" },
  we = ve(() =>
    l("div", { class: "card-header" }, [l("span", null, "简介")], -1)
  ),
  ke = ve(() => l("h2", null, "项目介绍", -1)),
  _e = ve(() => l("div", null, "本作品实现了如下功能:", -1)),
  Ce = ve(() =>
    l(
      "div",
      null,
      [
        f(" 1.QQ音乐 无损音质解析下载 自动提取最高音质下载 "),
        l("span", null, "Hi-Res -> Flac -> 320KbpsMP3 -> 128KbpsMP3"),
      ],
      -1
    )
  ),
  Ie = ve(() =>
    l(
      "div",
      null,
      "2. 登录网易云同步歌单匹配下载,目前因为兼容性问题已停止使用。",
      -1
    )
  ),
  Me = ve(() => l("div", null, "3. 酷我音乐无损歌曲解析。", -1)),
  Se = ve(() =>
    l(
      "div",
      null,
      "4. qq音乐元数据填充，苹果专辑元数据自动填充，歌词自动下载。",
      -1
    )
  ),
  Ve = ve(() =>
    l(
      "div",
      null,
      "5. 完美写入MP3/FLac元数据 让emby等支持读取音乐标签的软件分类管理。",
      -1
    )
  ),
  xe = ve(() => l("br", null, null, -1)),
  Ue = ve(() => l("h2", null, "致谢", -1)),
  ze = ve(() =>
    l(
      "div",
      null,
      "1. 本页面图标logo来自于@Vectorzhao(https://github.com/VectorZhao),感谢设计。",
      -1
    )
  ),
  je = ve(() =>
    l(
      "div",
      null,
      "2. 酷我音乐直链解析算法来自于@彭狸花喵(https://github.com/helloplhm-qwq),感谢TA的逆向分析。",
      -1
    )
  ),
  Ae = ve(() =>
    l(
      "div",
      null,
      "3. 还有很多其他的开发者向我提供了宝贵的Pull Requests,在此一并感谢！",
      -1
    )
  ),
  Le = ve(() =>
    l("div", { class: "card-header" }, [l("span", null, "设置")], -1)
  ),
  Be = { class: "function" },
  De = { class: "threadControl" },
  Pe = ve(() => l("div", null, "多线程数", -1)),
  He = { class: "threadControl" },
  Fe = ve(() => l("div", null, "下载目录", -1)),
  Te = { class: "threadControl" },
  Ee = { class: "actions" },
  Ne = ve(() =>
    l(
      "div",
      { class: "card-header" },
      [l("span", null, "歌曲关键词过滤(修改即时生效)")],
      -1
    )
  ),
  qe = { class: "filter-area" },
  Re = { class: "filter-list" },
  Oe = ve(() =>
    l("div", { class: "card-header" }, [l("span", null, "元数据匹配")], -1)
  ),
  Ke = { class: "dialog-cts" },
  Qe = { class: "filter-area" },
  Je = { class: "filter-list" },
  Ze = { class: "add-filter" },
  Ye = ["onClick"],
  We = { key: 0 },
  Ge = { class: "extra-meta" },
  Xe = { class: "extra-info" },
  $e = ["onClick"],
  et = ["onClick"],
  tt = ["onClick"],
  lt = ve(() => l("br", null, null, -1)),
  at = ve(() => l("br", null, null, -1)),
  nt = ve(() =>
    l(
      "div",
      { class: "button-bar" },
      [
        l("span", null, "音质升级计划"),
        l("span", null, [
          f("Design ❤️ "),
          l(
            "a",
            {
              href: "https://github.com/HackerZer0OpenSource/QQFlacMusicDownloader",
            },
            "HackerZer0开源项目"
          ),
          f(" @ 2023"),
        ]),
      ],
      -1
    )
  ),
  ot = a({
    __name: "Home",
    setup(a) {
      const { basicStore: p } = te(),
        w = () => {
          se.setBaseConfig({
            num: p.config.concurrency.num,
            folder: p.config.concurrency.downloadFolder,
            lyric: p.config.concurrency.saveLyric,
          }).then((e) => {});
        },
        k = s(""),
        C = s(),
        I = s(0);
      u(() => {
        I.value = C.value.clientHeight;
      });
      se.getBaseConfig().then((e) => {
        (p.config.concurrency.num = e.num),
          (p.config.concurrency.downloadFolder = e.folder),
          (p.config.concurrency.saveLyric = e.lyric);
      });
      const M = (e) => {
          "Enter" === e.key && (p.filterKeys.push(k.value), (k.value = ""));
        },
        S = function () {
          p.MusicMetaPrepare.push({
            platform: "mg",
            metas: [
              {
                meta_support: "iTunes",
                meta_option: "reflect",
                meta_types: "albumName",
                from: "",
                to: "",
              },
            ],
          });
        },
        V = s(!1),
        x = s(!1),
        j = s(""),
        A = s({ title: "", data: {}, target: {} });
      let L = null;
      const B = (e, t, l) => {
          (A.value.data = l),
            null !== L && L(),
            (L = _(
              A,
              (e, l) => {
                t(e.target);
              },
              { deep: !0 }
            )),
            (A.value.target = e),
            (V.value = !0);
        },
        D = () => {
          try {
            (p.MusicMetaPrepare = JSON.parse(j.value)), (x.value = !1);
          } catch (e) {
            z({ type: "error", message: "出现错误: " + e });
          }
        },
        P = () => {
          (j.value = JSON.stringify(p.MusicMetaPrepare)), (x.value = !0);
        };
      return (a, s) => {
        const u = n("el-image"),
          _ = n("el-card"),
          z = n("el-input"),
          L = n("el-checkbox"),
          H = n("el-button"),
          E = n("el-tag"),
          N = n("el-option"),
          q = n("el-select"),
          R = n("el-dialog");
        return (
          e(),
          t("div", me, [
            l(
              "span",
              { class: "title-name", ref_key: "title_height", ref: C },
              [
                r(u, { class: "logo", src: "../static/svg/web-2191ca79.svg" }),
                ge,
                ye,
              ],
              512
            ),
            l(
              "div",
              {
                class: "safe-area",
                style: d({ "padding-top": I.value + "px" }),
              },
              [
                l("div", be, [
                  r(
                    _,
                    { class: "box-card" },
                    {
                      header: c(() => [we]),
                      default: c(() => [
                        ke,
                        _e,
                        Ce,
                        Ie,
                        Me,
                        Se,
                        Ve,
                        xe,
                        Ue,
                        ze,
                        je,
                        Ae,
                      ]),
                      _: 1,
                    }
                  ),
                  r(
                    _,
                    { class: "box-card" },
                    {
                      header: c(() => [Le]),
                      default: c(() => [
                        l("div", Be, [
                          l("div", De, [
                            Pe,
                            r(
                              z,
                              {
                                modelValue: o(p).config.concurrency.num,
                                "onUpdate:modelValue":
                                  s[0] ||
                                  (s[0] = (e) =>
                                    (o(p).config.concurrency.num = e)),
                                placeholder: "输入协程并发数量",
                                "prefix-icon": o(F),
                              },
                              null,
                              8,
                              ["modelValue", "prefix-icon"]
                            ),
                          ]),
                          l("div", He, [
                            Fe,
                            r(
                              z,
                              {
                                modelValue:
                                  o(p).config.concurrency.downloadFolder,
                                "onUpdate:modelValue":
                                  s[1] ||
                                  (s[1] = (e) =>
                                    (o(p).config.concurrency.downloadFolder =
                                      e)),
                                placeholder: "输入下载目录路径",
                                "prefix-icon": o(T),
                              },
                              null,
                              8,
                              ["modelValue", "prefix-icon"]
                            ),
                          ]),
                          l("div", Te, [
                            r(
                              L,
                              {
                                modelValue: o(p).config.concurrency.saveLyric,
                                "onUpdate:modelValue":
                                  s[2] ||
                                  (s[2] = (e) =>
                                    (o(p).config.concurrency.saveLyric = e)),
                                label: "单独保存歌词文件",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          l("div", Ee, [
                            r(
                              H,
                              { type: "success", onClick: w },
                              { default: c(() => [f("保存")]), _: 1 }
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  r(
                    _,
                    { class: "box-card" },
                    {
                      header: c(() => [Ne]),
                      default: c(() => [
                        l("div", qe, [
                          l("div", Re, [
                            (e(!0),
                            t(
                              h,
                              null,
                              v(
                                o(p).filterKeys,
                                (t) => (
                                  e(),
                                  i(
                                    E,
                                    {
                                      closable: "",
                                      round: "",
                                      effect: "dark",
                                      class: "filter-key",
                                      key: t,
                                      onClose: (e) =>
                                        ((e) => {
                                          let t = 0;
                                          for (let l of p.filterKeys) {
                                            if (l === e)
                                              return void p.filterKeys.splice(
                                                t,
                                                1
                                              );
                                            t++;
                                          }
                                        })(t),
                                    },
                                    { default: c(() => [f(m(t), 1)]), _: 2 },
                                    1032,
                                    ["onClose"]
                                  )
                                )
                              ),
                              128
                            )),
                            l("div", null, [
                              r(
                                z,
                                {
                                  modelValue: k.value,
                                  "onUpdate:modelValue":
                                    s[3] || (s[3] = (e) => (k.value = e)),
                                  placeholder: "输入自定义关键词并按下Enter",
                                  onKeyup: M,
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  r(
                    _,
                    { class: "box-card" },
                    {
                      header: c(() => [Oe]),
                      default: c(() => [
                        r(
                          R,
                          {
                            class: "dialog-attr",
                            "destroy-on-close": "",
                            "align-center": "",
                            modelValue: V.value,
                            "onUpdate:modelValue":
                              s[5] || (s[5] = (e) => (V.value = e)),
                            title: "请选择" + A.value.title,
                          },
                          {
                            default: c(() => [
                              r(
                                q,
                                {
                                  modelValue: A.value.target,
                                  "onUpdate:modelValue":
                                    s[4] ||
                                    (s[4] = (e) => (A.value.target = e)),
                                  placeholder: "请选择接口",
                                  style: { width: "100%" },
                                },
                                {
                                  default: c(() => [
                                    (e(!0),
                                    t(
                                      h,
                                      null,
                                      v(
                                        A.value.data,
                                        (t, l) => (
                                          e(),
                                          i(
                                            N,
                                            { label: t, value: l },
                                            null,
                                            8,
                                            ["label", "value"]
                                          )
                                        )
                                      ),
                                      256
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue", "title"]
                        ),
                        r(
                          R,
                          {
                            class: "dialog-attribute",
                            "destroy-on-close": "",
                            "align-center": "",
                            modelValue: x.value,
                            "onUpdate:modelValue":
                              s[7] || (s[7] = (e) => (x.value = e)),
                            width: "90%",
                            title: "导出或导入规则",
                          },
                          {
                            default: c(() => [
                              l("div", Ke, [
                                g(
                                  l(
                                    "textarea",
                                    {
                                      "onUpdate:modelValue":
                                        s[6] || (s[6] = (e) => (j.value = e)),
                                      placeholder: "请粘贴json数据",
                                    },
                                    "\n              ",
                                    512
                                  ),
                                  [[y, j.value]]
                                ),
                                r(
                                  H,
                                  { type: "primary", onClick: D },
                                  { default: c(() => [f("保存")]), _: 1 }
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                        l("div", Qe, [
                          l("div", Je, [
                            (e(!0),
                            t(
                              h,
                              null,
                              v(
                                o(p).MusicMetaPrepare,
                                (a, n) => (
                                  e(),
                                  t("div", Ze, [
                                    f(" 从"),
                                    l(
                                      "span",
                                      {
                                        class: "option-style",
                                        onClick: (e) =>
                                          B(
                                            a.platform,
                                            (e) => {
                                              a.platform = e;
                                            },
                                            o(de)
                                          ),
                                      },
                                      m(o(de)[a.platform]),
                                      9,
                                      Ye
                                    ),
                                    f("下载后, 匹配元数据时执行: "),
                                    r(o(U)),
                                    a.metas && 0 === a.metas.length
                                      ? (e(),
                                        t(
                                          "div",
                                          We,
                                          "此规则没有任何约束，请增加一条约束。"
                                        ))
                                      : b("", !0),
                                    (e(!0),
                                    t(
                                      h,
                                      null,
                                      v(
                                        a.metas,
                                        (n, i) => (
                                          e(),
                                          t("div", Ge, [
                                            l("div", Xe, [
                                              f(" 用"),
                                              l(
                                                "span",
                                                {
                                                  class: "option-style",
                                                  onClick: (e) =>
                                                    B(
                                                      n.meta_support,
                                                      (e) => {
                                                        n.meta_support = e;
                                                      },
                                                      o(pe)
                                                    ),
                                                },
                                                m(o(pe)[n.meta_support]),
                                                9,
                                                $e
                                              ),
                                              f(
                                                "查询元数据时, 从" +
                                                  m(o(de)[a.platform]) +
                                                  "下载歌曲的 ",
                                                1
                                              ),
                                              l(
                                                "span",
                                                {
                                                  class: "option-style",
                                                  onClick: (e) =>
                                                    B(
                                                      n.meta_types,
                                                      (e) => {
                                                        n.meta_types = e;
                                                      },
                                                      o(fe)
                                                    ),
                                                },
                                                m(o(fe)[n.meta_types]),
                                                9,
                                                et
                                              ),
                                              f(
                                                m(o(he)[n.meta_option].lint) +
                                                  " ",
                                                1
                                              ),
                                              r(
                                                z,
                                                {
                                                  modelValue: n.from,
                                                  "onUpdate:modelValue": (e) =>
                                                    (n.from = e),
                                                  placeholder: "输入原始内容",
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "onUpdate:modelValue",
                                                ]
                                              ),
                                              l(
                                                "span",
                                                {
                                                  class: "option-style",
                                                  onClick: (e) =>
                                                    B(
                                                      n.meta_option,
                                                      (e) => {
                                                        n.meta_option = e;
                                                      },
                                                      ((e) => {
                                                        let t = {};
                                                        for (let l in e)
                                                          t[l] = e[l].name;
                                                        return t;
                                                      })(o(he))
                                                    ),
                                                },
                                                m(o(he)[n.meta_option].name),
                                                9,
                                                tt
                                              ),
                                              f("为"),
                                              r(
                                                z,
                                                {
                                                  modelValue: n.to,
                                                  "onUpdate:modelValue": (e) =>
                                                    (n.to = e),
                                                  placeholder: "将替换的内容",
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "onUpdate:modelValue",
                                                ]
                                              ),
                                              lt,
                                              at,
                                              r(
                                                H,
                                                {
                                                  type: "danger",
                                                  onClick: (e) =>
                                                    a.metas.splice(i, 1),
                                                },
                                                {
                                                  default: c(() => [
                                                    f("删除约束"),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["onClick"]
                                              ),
                                            ]),
                                          ])
                                        )
                                      ),
                                      256
                                    )),
                                    r(o(U)),
                                    r(
                                      H,
                                      {
                                        type: "success",
                                        onClick: (e) => {
                                          a.metas.push({
                                            meta_support: "iTunes",
                                            meta_option: "reflect",
                                            meta_types: "albumName",
                                            from: "",
                                            to: "",
                                          });
                                        },
                                      },
                                      {
                                        default: c(() => [f("添加约束")]),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick"]
                                    ),
                                    r(
                                      H,
                                      {
                                        type: "danger",
                                        onClick: (e) =>
                                          o(p).MusicMetaPrepare.splice(n, 1),
                                      },
                                      {
                                        default: c(() => [f("删除规则")]),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick"]
                                    ),
                                  ])
                                )
                              ),
                              256
                            )),
                          ]),
                          l("div", null, [
                            r(
                              H,
                              { type: "success", onClick: S },
                              { default: c(() => [f("添加新规则")]), _: 1 }
                            ),
                            r(
                              H,
                              { type: "primary", onClick: P },
                              { default: c(() => [f("添加外部规则")]), _: 1 }
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ],
              4
            ),
            nt,
          ])
        );
      };
    },
  }),
  it = ne(ot, [["__scopeId", "data-v-ea4826d2"]]),
  rt = { viewBox: "0 0 32 32", width: "1.2em", height: "1.2em" },
  st = [
    l(
      "path",
      {
        fill: "currentColor",
        d: "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z",
      },
      null,
      -1
    ),
  ];
const ut = {
    name: "carbon-download",
    render: function (l, a) {
      return e(), t("svg", rt, st);
    },
  },
  ct = { viewBox: "0 0 32 32", width: "1.2em", height: "1.2em" },
  dt = [
    l(
      "path",
      {
        fill: "currentColor",
        d: "M28 18h2v10h-2zm-4-4h2v14h-2zm-4 8h2v6h-2zm2.175-12l1.585-1.266a9.952 9.952 0 0 0-5.87-3.552a10.002 10.002 0 0 0-11.72 7.933A7.505 7.505 0 0 0 .054 21.41A7.684 7.684 0 0 0 7.77 28H16v-2H7.694a5.632 5.632 0 0 1-5.602-4.486a5.506 5.506 0 0 1 4.434-6.43l1.349-.245l.214-1.11a8.206 8.206 0 0 1 6.742-6.642a7.967 7.967 0 0 1 3.014.13A7.804 7.804 0 0 1 22.175 10z",
      },
      null,
      -1
    ),
  ];
const pt = {
    name: "carbon-cloud-data-ops",
    render: function (l, a) {
      return e(), t("svg", ct, dt);
    },
  },
  ft = { viewBox: "0 0 21 21", width: "1.2em", height: "1.2em" },
  ht = [
    l(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      [
        l("circle", { cx: "8.5", cy: "8.5", r: "5" }),
        l("path", { d: "M17.571 17.5L12 12" }),
      ],
      -1
    ),
  ];
const vt = {
    name: "system-uicons-search",
    render: function (l, a) {
      return e(), t("svg", ft, ht);
    },
  },
  mt = { viewBox: "0 0 21 21", width: "1.2em", height: "1.2em" },
  gt = [
    C(
      '<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></path><g transform="translate(-210 -1)"><path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path><circle cx="220.5" cy="11.5" r="4"></circle><path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path></g></g>',
      1
    ),
  ];
const yt = {
    name: "system-uicons-sun",
    render: function (l, a) {
      return e(), t("svg", mt, gt);
    },
  },
  bt = (e) => (w("data-v-930232a2"), (e = e()), k(), e),
  wt = { class: "content" },
  kt = { class: "left-banner" },
  _t = bt(() =>
    l("div", { class: "title" }, [l("div", null, "曲库流浪计划")], -1)
  ),
  Ct = { class: "functions" },
  It = bt(() => l("span", null, "主页", -1)),
  Mt = bt(() => l("span", null, "音乐搜索", -1)),
  St = bt(() => l("span", null, "网易云登录", -1)),
  Vt = bt(() => l("span", null, "网易云云盘", -1)),
  xt = bt(() => l("span", null, "下载管理", -1)),
  Ut = { class: "right-content" },
  zt = ne(
    a({
      __name: "Index",
      setup(a) {
        const { basicStore: i } = te(),
          s = q();
        return (
          u(() => {
            i.firstOpen &&
              setTimeout(() => {
                (i.token = "simulate load custom token"), (i.firstOpen = !1);
              }, 2e3);
          }),
          (a, i) => {
            const u = yt,
              c = vt,
              d = pt,
              p = ut,
              f = n("router-view");
            return (
              e(),
              t("div", wt, [
                l("div", kt, [
                  _t,
                  l("div", Ct, [
                    l(
                      "div",
                      {
                        class: "home-page",
                        onClick: i[0] || (i[0] = (e) => o(s).push("/home")),
                      },
                      [r(u), It]
                    ),
                    l(
                      "div",
                      {
                        class: "home-page",
                        onClick: i[1] || (i[1] = (e) => o(s).push("/search")),
                      },
                      [r(c), Mt]
                    ),
                    l(
                      "div",
                      {
                        class: "home-page",
                        onClick: i[2] || (i[2] = (e) => o(s).push("/netease")),
                      },
                      [r(d), St]
                    ),
                    l(
                      "div",
                      {
                        class: "home-page",
                        onClick: i[3] || (i[3] = (e) => o(s).push("/cloud")),
                      },
                      [r(d), Vt]
                    ),
                    l(
                      "div",
                      {
                        class: "home-page",
                        onClick: i[4] || (i[4] = (e) => o(s).push("/download")),
                      },
                      [r(p), xt]
                    ),
                  ]),
                ]),
                l("div", Ut, [r(f)]),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-930232a2"]]
  ),
  jt = { class: "error" },
  At = ((e) => (w("data-v-9d59bf98"), (e = e()), k(), e))(() =>
    l("h1", null, "404 - 没有找到你想要的页面。", -1)
  ),
  Lt = ne(
    a({
      __name: "NotFound",
      setup(a) {
        let i = R();
        return (a, s) => {
          const u = n("router-link");
          return (
            e(),
            t("div", jt, [
              At,
              l("h3", null, m(o(i).fullPath), 1),
              r(u, { to: "/" }, { default: c(() => [f("-> Go Home")]), _: 1 }),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-9d59bf98"]]
  ),
  Bt = { viewBox: "0 0 48 48", width: "1.2em", height: "1.2em" },
  Dt = ["id"],
  Pt = [
    l(
      "g",
      { fill: "none", stroke: "#fff" },
      [
        l("path", {
          fill: "#555",
          "stroke-linejoin": "round",
          "stroke-width": "4.302",
          d: "M44.782 24.17L31.918 7.1L14.135 20.5L27.5 37l3.356-2.336L44.782 24.17Z",
        }),
        l("path", {
          "stroke-linejoin": "round",
          "stroke-width": "4.302",
          d: "m27.5 37l-3.839 3.075l-10.563-.001l-2.6-3.45l-6.433-8.536L14.5 20.225",
        }),
        l("path", {
          "stroke-linecap": "round",
          "stroke-width": "4.5",
          d: "M13.206 40.072h31.36",
        }),
      ],
      -1
    ),
  ],
  Ht = ["mask"];
const Ft = {
    name: "icon-park-twotone-clear-format",
    render: function (a, n) {
      return (
        e(),
        t("svg", Bt, [
          l("mask", { id: a.idMap.ipTClearFormat0 }, Pt, 8, Dt),
          l(
            "path",
            {
              fill: "currentColor",
              d: "M0 0h48v48H0z",
              mask: "url(#" + a.idMap.ipTClearFormat0 + ")",
            },
            null,
            8,
            Ht
          ),
        ])
      );
    },
    data: () => ({
      idMap: {
        ipTClearFormat0: "uicons-" + Math.random().toString(36).substr(2, 10),
      },
    }),
  },
  Tt = { viewBox: "0 0 21 21", width: "1.2em", height: "1.2em" },
  Et = [
    l(
      "g",
      { fill: "none", "fill-rule": "evenodd" },
      [
        l("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M2.5 10.55a8 8 0 1 1 1.073 3.952",
        }),
        l("path", {
          fill: "currentColor",
          "fill-rule": "nonzero",
          d: "m2.5 13.5l2.5-3H0z",
        }),
        l("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M10.5 6.5v5h3",
        }),
      ],
      -1
    ),
  ];
const Nt = {
  name: "system-uicons-undo-history",
  render: function (l, a) {
    return e(), t("svg", Tt, Et);
  },
};
let qt = {
  __VUE__: !0,
  location: {
    ancestorOrigins: {},
    href: "https://tools.liumingye.cn/music/#/search/M/song/%E4%B9%8C%E6%A2%85%E5%AD%90%E9%85%B1%20",
    origin: "https://tools.liumingye.cn",
    protocol: "https:",
    host: "tools.liumingye.cn",
    hostname: "tools.liumingye.cn",
    port: "",
    pathname: "/music/",
    search: "",
    hash: "#/search/M/song/%E4%B9%8C%E6%A2%85%E5%AD%90%E9%85%B1%20%20",
  },
  navigator: {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.50",
  },
};
const Rt = function (e) {
    return (
      Object.prototype.toString.call(e).slice(8, -1).toLowerCase(), "window"
    );
  },
  Ot = function (e) {
    return typeof e;
  },
  Kt = function () {
    var e = {
        Svylf: "xffvrhtlezcvmasnsdkjuqbkcgxizyormeatwdujhpglpwyboniq",
        zHzwj: function (e, t) {
          return e + t;
        },
        GGkHR: "「Fuck You」",
        TryvD: function (e, t) {
          return e !== t;
        },
        FXuRG: function (e, t) {
          return e(t);
        },
        REMrC: "srszlqlvcqfocihoejaahrppxminkwxzkdtdwnjbevuybgguymft",
        mJVmH: function (e, t) {
          return e(t);
        },
        WptIt: function (e, t) {
          return e(t);
        },
        MJCot: function (e, t) {
          return e(t);
        },
        myGDS: "aZUiy",
        EZvrq: "oegdcjlhzkwifilqmmntawrpcjgoevstuuvhnxzdyxqrykpbfabs",
        uOXrD: function (e, t) {
          return e === t;
        },
        ynHhf: function (e, t) {
          return e === t;
        },
        lDzJr: function (e, t) {
          return e === t;
        },
        CKfvP: "TNFgD",
        pmDgU:
          "yGz4n9XE9xYy2Oj5Ub7E6u9a5p5aIWZYe53Orq5wE5UgnjbWq0410WTvmLBO1Z2N",
        FioDm: "fuosrbnnmcikvotxwlajwfcyhhzmkjbyzsiageteqxupdgqprvdl",
      },
      t = e.zHzwj("「Fuck You」", Date.now());
    if (e.TryvD(e.FXuRG(Ot, qt), "object")) t = e.REMrC;
    else if (
      e.TryvD(e.mJVmH(Ot, qt.location), "object") ||
      e.TryvD(e.WptIt(Ot, qt.location.host), "string")
    )
      t = e.Svylf;
    else if (
      e.TryvD(e.MJCot(Ot, qt.navigator), "object") ||
      e.TryvD(Ot(qt.navigator.userAgent), "string")
    )
      t = e.EZvrq;
    else if (e.uOXrD(Ot(qt.__VUE__), "boolean") && e.ynHhf(qt.__VUE__, !0)) {
      if (!e.lDzJr("TNFgD", "TNFgD")) return typeof _0x1373cc;
      t = e.pmDgU;
    } else t = e.FioDm;
    return t;
  };
var Qt, Jt;
function Zt(e, t) {
  const l = function (e, t) {
    return e - t;
  };
  for (
    var a = {
        iIli1l1l: "3|0|1|2|4",
        li1Iii1i: function (e, t) {
          return e !== t;
        },
        III1111l: function (e, t) {
          return e(t);
        },
        liIi1i11: function (e, t) {
          return e !== t;
        },
        Ii1llI1I: function (e, t) {
          return e(t);
        },
        ii1iiIIl: function (e, t) {
          return e(t);
        },
        iiiII1il: function (e, t) {
          return e === t;
        },
        iiIIiil1: function (e, t) {
          return e(t);
        },
        i1iIiili: function (e, t) {
          return e ^ t;
        },
        Il1I1il1: function (e, t, l) {
          return e(t, l);
        },
        lili1i1i: function (e, t) {
          return l(e, t);
        },
        iIIliIiI: function (e, t) {
          return e + t;
        },
      },
      n = a.iIli1l1l.split("|"),
      o = 0;
    ;

  ) {
    switch (n[o++]) {
      case "0":
        var i = t.split("");
        continue;
      case "1":
        var r = 114514;
        continue;
      case "2":
        r =
          "object" !== Ot(qt)
            ? 4
            : a.liIi1i11(a.III1111l(Ot, qt.location), "object") ||
              a.liIi1i11(a.Ii1llI1I(Ot, qt.location.host), "string")
            ? 3
            : a.liIi1i11(a.Ii1llI1I(Ot, qt.navigator), "object") ||
              a.liIi1i11(a.ii1iiIIl(Ot, qt.navigator.userAgent), "string")
            ? 2
            : a.iiiII1il(a.iiIIiil1(Ot, qt.__VUE__), "boolean") &&
              a.iiiII1il(qt.__VUE__, !0)
            ? 1
            : 0;
        continue;
      case "3":
        var s = {
          IiliIilI: function (e, t) {
            return a.i1iIiili(e, t);
          },
          IiIiiil: function (e, t, l) {
            return a.Il1I1il1(e, t, l);
          },
          Ill11i1i: function (e, t) {
            return a.lili1i1i(e, t);
          },
          ilIlIlI1: function (e, t) {
            return a.iIIliIiI(e, t);
          },
        };
        continue;
      case "4":
        return i.map(function (t, l) {
          return s.IiliIilI(
            t.charCodeAt(0),
            s.IiIiiil(Yt, e, s.Ill11i1i(s.ilIlIlI1(l, r), 1))
          );
        });
    }
    break;
  }
}
function Yt(e, t) {
  return e.charCodeAt(Math.floor(t % e.length));
}
(Jt =
  Qt ||
  ((Qt = 1),
  (function (e, t) {
    var l;
    if (
      (void 0 !== qt && qt.crypto && (l = qt.crypto),
      "undefined" != typeof self && self.crypto && (l = self.crypto),
      "undefined" != typeof globalThis &&
        globalThis.crypto &&
        (l = globalThis.crypto),
      !l && void 0 !== qt && qt.msCrypto && (l = qt.msCrypto),
      !l && void 0 !== gh && gh.crypto && (l = gh.crypto),
      !l)
    )
      try {
        l = GE;
      } catch (v) {}
    var a = function () {
        if (l) {
          if ("function" == typeof l.getRandomValues)
            try {
              return l.getRandomValues(new Uint32Array(1))[0];
            } catch (v) {}
          if ("function" == typeof l.randomBytes)
            try {
              return l.randomBytes(4).readInt32LE();
            } catch (v) {}
        }
        throw new Error(
          "Native crypto module could not be used to get secure random number."
        );
      },
      n =
        Object.create ||
        (function () {
          function e() {}
          return function (t) {
            var l;
            return (e.prototype = t), (l = new e()), (e.prototype = null), l;
          };
        })(),
      o = {},
      i = (o.lib = {}),
      r = (i.Base = {
        extend: function (e) {
          var t = n(this);
          return (
            e && t.mixIn(e),
            (t.hasOwnProperty("init") && this.init !== t.init) ||
              (t.init = function () {
                t.$super.init.apply(this, arguments);
              }),
            (t.init.prototype = t),
            (t.$super = this),
            t
          );
        },
        create: function () {
          var e = this.extend();
          return e.init.apply(e, arguments), e;
        },
        init: function () {},
        mixIn: function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
          e.hasOwnProperty("toString") && (this.toString = e.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        },
      }),
      s = (i.WordArray = r.extend({
        init: function (e, t) {
          (e = this.words = e || []),
            (this.sigBytes = null != t ? t : 4 * e.length);
        },
        toString: function (e) {
          return (e || c).stringify(this);
        },
        concat: function (e) {
          var t = this.words,
            l = e.words,
            a = this.sigBytes,
            n = e.sigBytes;
          if ((this.clamp(), a % 4))
            for (var o = 0; o < n; o++) {
              var i = (l[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
              t[(a + o) >>> 2] |= i << (24 - ((a + o) % 4) * 8);
            }
          else for (var r = 0; r < n; r += 4) t[(a + r) >>> 2] = l[r >>> 2];
          return (this.sigBytes += n), this;
        },
        clamp: function () {
          var t = this.words,
            l = this.sigBytes;
          (t[l >>> 2] &= 4294967295 << (32 - (l % 4) * 8)),
            (t.length = e.ceil(l / 4));
        },
        clone: function () {
          var e = r.clone.call(this);
          return (e.words = this.words.slice(0)), e;
        },
        random: function (e) {
          for (var t = [], l = 0; l < e; l += 4) t.push(a());
          return new s.init(t, e);
        },
      })),
      u = (o.enc = {}),
      c = (u.Hex = {
        stringify: function (e) {
          for (var t = e.words, l = e.sigBytes, a = [], n = 0; n < l; n++) {
            var o = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
            a.push((o >>> 4).toString(16)), a.push((15 & o).toString(16));
          }
          return a.join("");
        },
        parse: function (e) {
          for (var t = e.length, l = [], a = 0; a < t; a += 2)
            l[a >>> 3] |= parseInt(e.substr(a, 2), 16) << (24 - (a % 8) * 4);
          return new s.init(l, t / 2);
        },
      }),
      d = (u.Latin1 = {
        stringify: function (e) {
          for (var t = e.words, l = e.sigBytes, a = [], n = 0; n < l; n++) {
            var o = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
            a.push(String.fromCharCode(o));
          }
          return a.join("");
        },
        parse: function (e) {
          for (var t = e.length, l = [], a = 0; a < t; a++)
            l[a >>> 2] |= (255 & e.charCodeAt(a)) << (24 - (a % 4) * 8);
          return new s.init(l, t);
        },
      }),
      p = (u.Utf8 = {
        stringify: function (e) {
          try {
            return decodeURIComponent(escape(d.stringify(e)));
          } catch (t) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function (e) {
          return d.parse(unescape(encodeURIComponent(e)));
        },
      }),
      f = (i.BufferedBlockAlgorithm = r.extend({
        reset: function () {
          (this._data = new s.init()), (this._nDataBytes = 0);
        },
        _append: function (e) {
          "string" == typeof e && (e = p.parse(e)),
            this._data.concat(e),
            (this._nDataBytes += e.sigBytes);
        },
        _process: function (t) {
          var l,
            a = this._data,
            n = a.words,
            o = a.sigBytes,
            i = this.blockSize,
            r = o / (4 * i),
            u =
              (r = t ? e.ceil(r) : e.max((0 | r) - this._minBufferSize, 0)) * i,
            c = e.min(4 * u, o);
          if (u) {
            for (var d = 0; d < u; d += i) this._doProcessBlock(n, d);
            (l = n.splice(0, u)), (a.sigBytes -= c);
          }
          return new s.init(l, c);
        },
        clone: function () {
          var e = r.clone.call(this);
          return (e._data = this._data.clone()), e;
        },
        _minBufferSize: 0,
      }));
    i.Hasher = f.extend({
      cfg: r.extend(),
      init: function (e) {
        (this.cfg = this.cfg.extend(e)), this.reset();
      },
      reset: function () {
        f.reset.call(this), this._doReset();
      },
      update: function (e) {
        return this._append(e), this._process(), this;
      },
      finalize: function (e) {
        return e && this._append(e), this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (e) {
        return function (t, l) {
          return new e.init(l).finalize(t);
        };
      },
      _createHmacHelper: function (e) {
        return function (t, l) {
          return new h.HMAC.init(e, l).finalize(t);
        };
      },
    });
    var h = (o.algo = {});
    return o;
  })(Math))),
  (function (e) {
    var t = Jt,
      l = t.lib,
      a = l.WordArray,
      n = l.Hasher,
      o = t.algo,
      i = [];
    !(function () {
      for (var t = 0; t < 64; t++)
        i[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
    })();
    var r = (o.MD5 = n.extend({
      _doReset: function () {
        this._hash = new a.init([
          1732584193, 4023233417, 2562383102, 271733878,
        ]);
      },
      _doProcessBlock: function (e, t) {
        for (var l = 0; l < 16; l++) {
          var a = t + l,
            n = e[a];
          e[a] =
            (16711935 & ((n << 8) | (n >>> 24))) |
            (4278255360 & ((n << 24) | (n >>> 8)));
        }
        var o = this._hash.words,
          r = e[t + 0],
          p = e[t + 1],
          f = e[t + 2],
          h = e[t + 3],
          v = e[t + 4],
          m = e[t + 5],
          g = e[t + 6],
          y = e[t + 7],
          b = e[t + 8],
          w = e[t + 9],
          k = e[t + 10],
          _ = e[t + 11],
          C = e[t + 12],
          I = e[t + 13],
          M = e[t + 14],
          S = e[t + 15],
          V = o[0],
          x = o[1],
          U = o[2],
          z = o[3];
        (V = s(V, x, U, z, r, 7, i[0])),
          (z = s(z, V, x, U, p, 12, i[1])),
          (U = s(U, z, V, x, f, 17, i[2])),
          (x = s(x, U, z, V, h, 22, i[3])),
          (V = s(V, x, U, z, v, 7, i[4])),
          (z = s(z, V, x, U, m, 12, i[5])),
          (U = s(U, z, V, x, g, 17, i[6])),
          (x = s(x, U, z, V, y, 22, i[7])),
          (V = s(V, x, U, z, b, 7, i[8])),
          (z = s(z, V, x, U, w, 12, i[9])),
          (U = s(U, z, V, x, k, 17, i[10])),
          (x = s(x, U, z, V, _, 22, i[11])),
          (V = s(V, x, U, z, C, 7, i[12])),
          (z = s(z, V, x, U, I, 12, i[13])),
          (U = s(U, z, V, x, M, 17, i[14])),
          (V = u(V, (x = s(x, U, z, V, S, 22, i[15])), U, z, p, 5, i[16])),
          (z = u(z, V, x, U, g, 9, i[17])),
          (U = u(U, z, V, x, _, 14, i[18])),
          (x = u(x, U, z, V, r, 20, i[19])),
          (V = u(V, x, U, z, m, 5, i[20])),
          (z = u(z, V, x, U, k, 9, i[21])),
          (U = u(U, z, V, x, S, 14, i[22])),
          (x = u(x, U, z, V, v, 20, i[23])),
          (V = u(V, x, U, z, w, 5, i[24])),
          (z = u(z, V, x, U, M, 9, i[25])),
          (U = u(U, z, V, x, h, 14, i[26])),
          (x = u(x, U, z, V, b, 20, i[27])),
          (V = u(V, x, U, z, I, 5, i[28])),
          (z = u(z, V, x, U, f, 9, i[29])),
          (U = u(U, z, V, x, y, 14, i[30])),
          (V = c(V, (x = u(x, U, z, V, C, 20, i[31])), U, z, m, 4, i[32])),
          (z = c(z, V, x, U, b, 11, i[33])),
          (U = c(U, z, V, x, _, 16, i[34])),
          (x = c(x, U, z, V, M, 23, i[35])),
          (V = c(V, x, U, z, p, 4, i[36])),
          (z = c(z, V, x, U, v, 11, i[37])),
          (U = c(U, z, V, x, y, 16, i[38])),
          (x = c(x, U, z, V, k, 23, i[39])),
          (V = c(V, x, U, z, I, 4, i[40])),
          (z = c(z, V, x, U, r, 11, i[41])),
          (U = c(U, z, V, x, h, 16, i[42])),
          (x = c(x, U, z, V, g, 23, i[43])),
          (V = c(V, x, U, z, w, 4, i[44])),
          (z = c(z, V, x, U, C, 11, i[45])),
          (U = c(U, z, V, x, S, 16, i[46])),
          (V = d(V, (x = c(x, U, z, V, f, 23, i[47])), U, z, r, 6, i[48])),
          (z = d(z, V, x, U, y, 10, i[49])),
          (U = d(U, z, V, x, M, 15, i[50])),
          (x = d(x, U, z, V, m, 21, i[51])),
          (V = d(V, x, U, z, C, 6, i[52])),
          (z = d(z, V, x, U, h, 10, i[53])),
          (U = d(U, z, V, x, k, 15, i[54])),
          (x = d(x, U, z, V, p, 21, i[55])),
          (V = d(V, x, U, z, b, 6, i[56])),
          (z = d(z, V, x, U, S, 10, i[57])),
          (U = d(U, z, V, x, g, 15, i[58])),
          (x = d(x, U, z, V, I, 21, i[59])),
          (V = d(V, x, U, z, v, 6, i[60])),
          (z = d(z, V, x, U, _, 10, i[61])),
          (U = d(U, z, V, x, f, 15, i[62])),
          (x = d(x, U, z, V, w, 21, i[63])),
          (o[0] = (o[0] + V) | 0),
          (o[1] = (o[1] + x) | 0),
          (o[2] = (o[2] + U) | 0),
          (o[3] = (o[3] + z) | 0);
      },
      _doFinalize: function () {
        var t = this._data,
          l = t.words,
          a = 8 * this._nDataBytes,
          n = 8 * t.sigBytes;
        l[n >>> 5] |= 128 << (24 - (n % 32));
        var o = e.floor(a / 4294967296),
          i = a;
        (l[15 + (((n + 64) >>> 9) << 4)] =
          (16711935 & ((o << 8) | (o >>> 24))) |
          (4278255360 & ((o << 24) | (o >>> 8)))),
          (l[14 + (((n + 64) >>> 9) << 4)] =
            (16711935 & ((i << 8) | (i >>> 24))) |
            (4278255360 & ((i << 24) | (i >>> 8)))),
          (t.sigBytes = 4 * (l.length + 1)),
          this._process();
        for (var r = this._hash, s = r.words, u = 0; u < 4; u++) {
          var c = s[u];
          s[u] =
            (16711935 & ((c << 8) | (c >>> 24))) |
            (4278255360 & ((c << 24) | (c >>> 8)));
        }
        return r;
      },
      clone: function () {
        var e = n.clone.call(this);
        return (e._hash = this._hash.clone()), e;
      },
    }));
    function s(e, t, l, a, n, o, i) {
      var r = e + ((t & l) | (~t & a)) + n + i;
      return ((r << o) | (r >>> (32 - o))) + t;
    }
    function u(e, t, l, a, n, o, i) {
      var r = e + ((t & a) | (l & ~a)) + n + i;
      return ((r << o) | (r >>> (32 - o))) + t;
    }
    function c(e, t, l, a, n, o, i) {
      var r = e + (t ^ l ^ a) + n + i;
      return ((r << o) | (r >>> (32 - o))) + t;
    }
    function d(e, t, l, a, n, o, i) {
      var r = e + (l ^ (t | ~a)) + n + i;
      return ((r << o) | (r >>> (32 - o))) + t;
    }
    (t.MD5 = n._createHelper(r)), (t.HmacMD5 = n._createHmacHelper(r));
  })(Math);
const Wt = "pW8jg/mke6cO1F4CTuaiswhZfQGzMyq5NJRLPVIvDxlA7=E3YrSUoH0b2BXKn9td+";
function Gt(e) {
  const t = function (e, t) {
      return e << t;
    },
    l = function (e, t) {
      return e & t;
    },
    a = function (e, t) {
      return e % t;
    };
  var n,
    o,
    i,
    r,
    s,
    u,
    c,
    d,
    f = {
      bgtAe: function (e, t) {
        return e !== t;
      },
      HPrAi: "OSVOt",
      UvJUa: "0|6|2|4|7|5|1|8|3",
      lBwln: function (e, t) {
        return e >> t;
      },
      TjpAy: function (e, t) {
        return e + t;
      },
      GVZtk: function (e, t) {
        return e + t;
      },
      PhnhP: function (e, t) {
        return e | t;
      },
      txWRb: function (e, t) {
        return e << t;
      },
      dlijY: function (e, l) {
        return t(e, l);
      },
      iJalZ: function (e, t) {
        return l(e, t);
      },
      PUIzj: function (e, t) {
        return e & t;
      },
      kCBJn: function (e, t) {
        return a(e, t);
      },
      oYAvf: function (e, t) {
        return e - t;
      },
      lPeqS: "===",
      OcODS: function (e, t) {
        return e || t;
      },
    },
    h = 0,
    v = "";
  if (!e) {
    if (!f[p(433, "nH]K")](f[p(455, "KKJ%")], f.HPrAi)) return e;
    _0x514518 = 4;
  }
  do {
    for (var m = f.UvJUa.split("|"), g = 0; ; ) {
      switch (m[g++]) {
        case "0":
          n = e[h++];
          continue;
        case "1":
          u = 63 & f.lBwln(d, 6);
          continue;
        case "2":
          i = e[h++];
          continue;
        case "3":
          v +=
            f.TjpAy(f.GVZtk(Wt.charAt(r), Wt.charAt(s)), Wt.charAt(u)) +
            Wt.charAt(c);
          continue;
        case "4":
          d = f.PhnhP(f.txWRb(n, 16), f.dlijY(o, 8)) | i;
          continue;
        case "5":
          s = f.iJalZ(f.lBwln(d, 12), 63);
          continue;
        case "6":
          o = e[h++];
          continue;
        case "7":
          r = f.PUIzj(d >> 18, 63);
          continue;
        case "8":
          c = f.iJalZ(d, 63);
          continue;
      }
      break;
    }
  } while (h < e.length);
  var y = f.kCBJn(e.length, 3);
  return f.TjpAy(
    y ? v.slice(0, f.oYAvf(y, 3)) : v,
    f.lPeqS.slice(f.OcODS(y, 3))
  );
}
const Xt = (e) => {
  e._t = Date.now();
  let t = JSON.stringify(e),
    l = encodeURIComponent(t);
  return (
    (e.token = (function (e) {
      var t = function (e, t, l) {
          return e(t, l);
        },
        l = function (e, t) {
          return e + t;
        },
        a = "20230327.",
        n = function (e, t) {
          return e(t);
        },
        o = Kt();
      if (Rt(qt)) {
        var i = t(Zt, o.toString(), e.toString());
        return l(a, n(Jt.MD5, n(Gt, i)));
      }
    })(l)),
    e
  );
};
function $t(e) {
  return (function (e) {
    for (var t = "0123456789abcdef", l = "", a = 0; a < 4 * e.length; a++)
      l +=
        t.charAt((e[a >> 2] >> (8 * (3 - (a % 4)) + 4)) & 15) +
        t.charAt((e[a >> 2] >> (8 * (3 - (a % 4)))) & 15);
    return l;
  })(
    (function (e, t) {
      (e[t >> 5] |= 128 << (24 - (t % 32))),
        (e[15 + (((t + 64) >> 9) << 4)] = t);
      for (
        var l = Array(80),
          a = 1732584193,
          n = -271733879,
          o = -1732584194,
          i = 271733878,
          r = -1009589776,
          s = 0;
        s < e.length;
        s += 16
      ) {
        for (var u = a, c = n, d = o, p = i, f = r, h = 0; h < 80; h++) {
          l[h] =
            h < 16
              ? e[s + h]
              : al(l[h - 3] ^ l[h - 8] ^ l[h - 14] ^ l[h - 16], 1);
          var v = ll(ll(al(a, 5), el(h, n, o, i)), ll(ll(r, l[h]), tl(h)));
          (r = i), (i = o), (o = al(n, 30)), (n = a), (a = v);
        }
        (a = ll(a, u)),
          (n = ll(n, c)),
          (o = ll(o, d)),
          (i = ll(i, p)),
          (r = ll(r, f));
      }
      return Array(a, n, o, i, r);
    })(
      (function (e) {
        for (var t = Array(), l = 0; l < 8 * e.length; l += 8)
          t[l >> 5] |= (255 & e.charCodeAt(l / 8)) << (24 - (l % 32));
        return t;
      })(e),
      8 * e.length
    )
  );
}
function el(e, t, l, a) {
  return e < 20
    ? (t & l) | (~t & a)
    : e < 40
    ? t ^ l ^ a
    : e < 60
    ? (t & l) | (t & a) | (l & a)
    : t ^ l ^ a;
}
function tl(e) {
  return e < 20
    ? 1518500249
    : e < 40
    ? 1859775393
    : e < 60
    ? -1894007588
    : -899497514;
}
function ll(e, t) {
  var l = (65535 & e) + (65535 & t);
  return (((e >> 16) + (t >> 16) + (l >> 16)) << 16) | (65535 & l);
}
function al(e, t) {
  return (e << t) | (e >>> (32 - t));
}
const nl = {};
var ol, il, rl, sl, ul, cl, dl;
(ol = function (e, t) {
  return (e << t) | (e >>> (32 - t));
}),
  (il = function (e, t) {
    var l, a, n, o, i;
    return (
      (n = 2147483648 & e),
      (o = 2147483648 & t),
      (i = (1073741823 & e) + (1073741823 & t)),
      (l = 1073741824 & e) & (a = 1073741824 & t)
        ? 2147483648 ^ i ^ n ^ o
        : l | a
        ? 1073741824 & i
          ? 3221225472 ^ i ^ n ^ o
          : 1073741824 ^ i ^ n ^ o
        : i ^ n ^ o
    );
  }),
  (rl = function (e, t, l, a, n, o, i) {
    return (e = il(e, il(il(((r = t) & l) | (~r & a), n), i))), il(ol(e, o), t);
    var r;
  }),
  (sl = function (e, t, l, a, n, o, i) {
    return (e = il(e, il(il((t & (r = a)) | (l & ~r), n), i))), il(ol(e, o), t);
    var r;
  }),
  (ul = function (e, t, l, a, n, o, i) {
    return (e = il(e, il(il(t ^ l ^ a, n), i))), il(ol(e, o), t);
  }),
  (cl = function (e, t, l, a, n, o, i) {
    return (e = il(e, il(il(l ^ (t | ~a), n), i))), il(ol(e, o), t);
  }),
  (dl = function (e) {
    var t,
      l = "",
      a = "";
    for (t = 0; t <= 3; t++)
      l += (a = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(
        a.length - 2,
        2
      );
    return l;
  }),
  (nl.md5 = function (e) {
    var t,
      l,
      a,
      n,
      o,
      i,
      r,
      s,
      u,
      c = Array();
    for (
      c = (function (e) {
        for (
          var t,
            l = e.length,
            a = l + 8,
            n = 16 * ((a - (a % 64)) / 64 + 1),
            o = Array(n - 1),
            i = 0,
            r = 0;
          r < l;

        )
          (i = (r % 4) * 8),
            (o[(t = (r - (r % 4)) / 4)] = o[t] | (e.charCodeAt(r) << i)),
            r++;
        return (
          (i = (r % 4) * 8),
          (o[(t = (r - (r % 4)) / 4)] = o[t] | (128 << i)),
          (o[n - 2] = l << 3),
          (o[n - 1] = l >>> 29),
          o
        );
      })(
        (e = (function (e) {
          e = e.replace(/\x0d\x0a/g, "\n");
          for (var t = "", l = 0; l < e.length; l++) {
            var a = e.charCodeAt(l);
            a < 128
              ? (t += String.fromCharCode(a))
              : a > 127 && a < 2048
              ? ((t += String.fromCharCode((a >> 6) | 192)),
                (t += String.fromCharCode((63 & a) | 128)))
              : ((t += String.fromCharCode((a >> 12) | 224)),
                (t += String.fromCharCode(((a >> 6) & 63) | 128)),
                (t += String.fromCharCode((63 & a) | 128)));
          }
          return t;
        })(e))
      ),
        i = 1732584193,
        r = 4023233417,
        s = 2562383102,
        u = 271733878,
        t = 0;
      t < c.length;
      t += 16
    )
      (l = i),
        (a = r),
        (n = s),
        (o = u),
        (i = rl(i, r, s, u, c[t + 0], 7, 3614090360)),
        (u = rl(u, i, r, s, c[t + 1], 12, 3905402710)),
        (s = rl(s, u, i, r, c[t + 2], 17, 606105819)),
        (r = rl(r, s, u, i, c[t + 3], 22, 3250441966)),
        (i = rl(i, r, s, u, c[t + 4], 7, 4118548399)),
        (u = rl(u, i, r, s, c[t + 5], 12, 1200080426)),
        (s = rl(s, u, i, r, c[t + 6], 17, 2821735955)),
        (r = rl(r, s, u, i, c[t + 7], 22, 4249261313)),
        (i = rl(i, r, s, u, c[t + 8], 7, 1770035416)),
        (u = rl(u, i, r, s, c[t + 9], 12, 2336552879)),
        (s = rl(s, u, i, r, c[t + 10], 17, 4294925233)),
        (r = rl(r, s, u, i, c[t + 11], 22, 2304563134)),
        (i = rl(i, r, s, u, c[t + 12], 7, 1804603682)),
        (u = rl(u, i, r, s, c[t + 13], 12, 4254626195)),
        (s = rl(s, u, i, r, c[t + 14], 17, 2792965006)),
        (r = rl(r, s, u, i, c[t + 15], 22, 1236535329)),
        (i = sl(i, r, s, u, c[t + 1], 5, 4129170786)),
        (u = sl(u, i, r, s, c[t + 6], 9, 3225465664)),
        (s = sl(s, u, i, r, c[t + 11], 14, 643717713)),
        (r = sl(r, s, u, i, c[t + 0], 20, 3921069994)),
        (i = sl(i, r, s, u, c[t + 5], 5, 3593408605)),
        (u = sl(u, i, r, s, c[t + 10], 9, 38016083)),
        (s = sl(s, u, i, r, c[t + 15], 14, 3634488961)),
        (r = sl(r, s, u, i, c[t + 4], 20, 3889429448)),
        (i = sl(i, r, s, u, c[t + 9], 5, 568446438)),
        (u = sl(u, i, r, s, c[t + 14], 9, 3275163606)),
        (s = sl(s, u, i, r, c[t + 3], 14, 4107603335)),
        (r = sl(r, s, u, i, c[t + 8], 20, 1163531501)),
        (i = sl(i, r, s, u, c[t + 13], 5, 2850285829)),
        (u = sl(u, i, r, s, c[t + 2], 9, 4243563512)),
        (s = sl(s, u, i, r, c[t + 7], 14, 1735328473)),
        (r = sl(r, s, u, i, c[t + 12], 20, 2368359562)),
        (i = ul(i, r, s, u, c[t + 5], 4, 4294588738)),
        (u = ul(u, i, r, s, c[t + 8], 11, 2272392833)),
        (s = ul(s, u, i, r, c[t + 11], 16, 1839030562)),
        (r = ul(r, s, u, i, c[t + 14], 23, 4259657740)),
        (i = ul(i, r, s, u, c[t + 1], 4, 2763975236)),
        (u = ul(u, i, r, s, c[t + 4], 11, 1272893353)),
        (s = ul(s, u, i, r, c[t + 7], 16, 4139469664)),
        (r = ul(r, s, u, i, c[t + 10], 23, 3200236656)),
        (i = ul(i, r, s, u, c[t + 13], 4, 681279174)),
        (u = ul(u, i, r, s, c[t + 0], 11, 3936430074)),
        (s = ul(s, u, i, r, c[t + 3], 16, 3572445317)),
        (r = ul(r, s, u, i, c[t + 6], 23, 76029189)),
        (i = ul(i, r, s, u, c[t + 9], 4, 3654602809)),
        (u = ul(u, i, r, s, c[t + 12], 11, 3873151461)),
        (s = ul(s, u, i, r, c[t + 15], 16, 530742520)),
        (r = ul(r, s, u, i, c[t + 2], 23, 3299628645)),
        (i = cl(i, r, s, u, c[t + 0], 6, 4096336452)),
        (u = cl(u, i, r, s, c[t + 7], 10, 1126891415)),
        (s = cl(s, u, i, r, c[t + 14], 15, 2878612391)),
        (r = cl(r, s, u, i, c[t + 5], 21, 4237533241)),
        (i = cl(i, r, s, u, c[t + 12], 6, 1700485571)),
        (u = cl(u, i, r, s, c[t + 3], 10, 2399980690)),
        (s = cl(s, u, i, r, c[t + 10], 15, 4293915773)),
        (r = cl(r, s, u, i, c[t + 1], 21, 2240044497)),
        (i = cl(i, r, s, u, c[t + 8], 6, 1873313359)),
        (u = cl(u, i, r, s, c[t + 15], 10, 4264355552)),
        (s = cl(s, u, i, r, c[t + 6], 15, 2734768916)),
        (r = cl(r, s, u, i, c[t + 13], 21, 1309151649)),
        (i = cl(i, r, s, u, c[t + 4], 6, 4149444226)),
        (u = cl(u, i, r, s, c[t + 11], 10, 3174756917)),
        (s = cl(s, u, i, r, c[t + 2], 15, 718787259)),
        (r = cl(r, s, u, i, c[t + 9], 21, 3951481745)),
        (i = il(i, l)),
        (r = il(r, a)),
        (s = il(s, n)),
        (u = il(u, o));
    return (dl(i) + dl(r) + dl(s) + dl(u)).toLowerCase();
  });
const pl = (e) => (w("data-v-7e6add5e"), (e = e()), k(), e),
  fl = { class: "content" },
  hl = pl(() => l("div", { class: "top-tip" }, "搜索", -1)),
  vl = { class: "area-top" },
  ml = { class: "options" },
  gl = { key: 0, class: "area-action" },
  yl = { class: "union" },
  bl = pl(() => l("span", { style: { "margin-left": "4px" } }, "历史搜索", -1)),
  wl = { class: "h-list" },
  kl = ["onClick"],
  _l = { key: 0, style: { margin: "10px" }, class: "error-load" },
  Cl = { key: 1, class: "search-list-a" },
  Il = { class: "container" },
  Ml = { class: "title-tip" },
  Sl = { key: 0, class: "flac-tip" },
  Vl = { class: "name" },
  xl = { key: 0, class: "bottom" },
  Ul = { class: "tips" },
  zl = a({
    __name: "SearchMusic",
    props: { search: {} },
    setup(a) {
      const p = a,
        { basicStore: g } = te(),
        y = le(g),
        w = s(1),
        k = s();
      function C() {
        x();
      }
      _(y.lastSearch, (e, t) => {
        0 === e.length && ((M.value = void 0), (w.value = 1));
      }),
        _(y.config.value, () => {
          (M.value = void 0), (w.value = 1);
        });
      const M = s(),
        S = (e) => e.singer,
        V = (e) => {
          if ("wyy" === g.config.platform) {
            let t = new Date(e.time_publish),
              l = t.getDate(),
              a = t.getMonth();
            return (
              l < 10 && (l = "0" + l),
              a < 10 && (a = `0${a}`),
              t.getFullYear() + "-" + a + "-" + l
            );
          }
          return "" === e.time_publish ? "0000-01-01" : e.time_publish;
        },
        x = async () => {
          void 0 === g.searchHistory.find((e, t, l) => e === g.lastSearch) &&
            g.searchHistory.push(g.lastSearch);
          const e = (e) => {
            let t = [];
            e.list.forEach((e) => {
              ((e) => {
                if (!g.config.disableFilterKey)
                  for (let t of g.filterKeys)
                    if (e.title.toUpperCase().includes(t.toUpperCase()))
                      return !1;
                if (
                  g.config.ignoreNoAlbumSongs &&
                  ("未分类专辑" == e.album || "" == e.album)
                )
                  return !1;
                if (g.config.onlyMatchSearchKey && !S(e).includes(g.lastSearch))
                  return !1;
                return !0;
              })(e) && t.push(e);
            }),
              (e.list = t),
              (M.value = e);
          };
          if ("myfreemp3" === g.config.platform) {
            let t = Xt({
              type: "YQM",
              text: g.lastSearch,
              page: w.value,
              v: "beta",
            });
            se.searchMusicForMyFreeMp3(g.config.platform, t).then(e);
          } else if ("kw" === g.config.platform) {
            const t = await se.getKWToken(),
              l = (function (e = "ERp7prxWCcmwwxs5msQ4fawshNixY7Qe") {
                return nl.md5($t(e)).toUpperCase();
              })(t.token);
            se.searchMusic(
              g.lastSearch,
              w.value,
              g.config.platform,
              30,
              "/" + t.token + "/" + l
            ).then(e);
          } else
            se.searchMusic(g.lastSearch, w.value, g.config.platform).then(e);
        };
      function U(e, t, l, a) {
        return S(e);
      }
      function z(e, t, l, a) {
        return e.notice + " | " + e.size;
      }
      const A = s(0);
      u(() => {
        new ResizeObserver((e) => {
          A.value = k.value.clientHeight;
        }).observe(k.value),
          (window.onresize = () => {
            A.value = k.value.clientHeight;
          }),
          void 0 !== p.search && ((g.lastSearch = p.search), x());
      });
      const L = (e) => {
          let t = { ...e };
          "myfreemp3" === g.config.platform &&
            (t.prefix =
              "https://test.quanjian.com.cn/m/api/link?" +
              (function (e) {
                try {
                  var t = [];
                  for (var l in e) {
                    var a = encodeURIComponent(l),
                      n = encodeURIComponent(e[l]);
                    t.push(a + "=" + n);
                  }
                  return t.join("&");
                } catch (o) {
                  return "";
                }
              })(Xt({ id: t.mid.toString(), quality: t.prefix.toString() }))),
            se.postDownload(t, g.config).then((e) => {
              200 === e.code &&
                j({
                  title: "成功",
                  message: "已经提交[" + t.readableText + "]下载任务",
                  type: "success",
                });
            });
        },
        B = () => {
          if (void 0 !== M.value) for (let e of M.value.list) L(e);
        },
        D = () => {
          (M.value = void 0), (w.value = 1), x();
        },
        P = function () {
          j({
            title: "功能还没做捏",
            message:
              "关注嘉然 顿顿解馋 关注柯洁喵 谢谢喵 关注七海Nana7mi 010 谢谢喵 关注天选罕见冬雪莲 谢谢喵",
            type: "error",
          });
        };
      return (a, s) => {
        var u, p, _;
        const S = n("el-option"),
          x = n("el-select"),
          j = n("el-button"),
          H = n("el-input"),
          F = n("el-checkbox"),
          T = Nt,
          N = Ft,
          q = n("el-empty"),
          R = n("el-table-column"),
          O = n("el-table"),
          K = n("el-pagination");
        return (
          e(),
          t("div", fl, [
            l(
              "div",
              { ref_key: "headRef", ref: k, class: "head-section" },
              [
                hl,
                l("div", vl, [
                  r(
                    H,
                    {
                      modelValue: o(g).lastSearch,
                      "onUpdate:modelValue":
                        s[1] || (s[1] = (e) => (o(g).lastSearch = e)),
                      placeholder: "请输入关键词搜索",
                      class: "input-with-select",
                      onKeyup: I(D, ["enter"]),
                    },
                    {
                      prepend: c(() => [
                        r(
                          x,
                          {
                            modelValue: o(g).config.platform,
                            "onUpdate:modelValue":
                              s[0] ||
                              (s[0] = (e) => (o(g).config.platform = e)),
                            placeholder: "请选择接口",
                            style: { width: "120px" },
                          },
                          {
                            default: c(() => [
                              (e(!0),
                              t(
                                h,
                                null,
                                v(
                                  o(ce),
                                  (t) => (
                                    e(),
                                    i(
                                      S,
                                      { label: t.name, value: t.value },
                                      null,
                                      8,
                                      ["label", "value"]
                                    )
                                  )
                                ),
                                256
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      append: c(() => [
                        r(j, { icon: o(E), onClick: D }, null, 8, ["icon"]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue", "onKeyup"]
                  ),
                  l("div", ml, [
                    r(
                      F,
                      {
                        modelValue: o(g).config.onlyMatchSearchKey,
                        "onUpdate:modelValue":
                          s[2] ||
                          (s[2] = (e) => (o(g).config.onlyMatchSearchKey = e)),
                        label: "仅显示搜索的歌手歌曲",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    r(
                      F,
                      {
                        modelValue: o(g).config.disableFilterKey,
                        "onUpdate:modelValue":
                          s[3] ||
                          (s[3] = (e) => (o(g).config.disableFilterKey = e)),
                        label: "不使用关键词过滤歌曲",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    r(
                      F,
                      {
                        modelValue: o(g).config.ignoreNoAlbumSongs,
                        "onUpdate:modelValue":
                          s[4] ||
                          (s[4] = (e) => (o(g).config.ignoreNoAlbumSongs = e)),
                        label: "屏蔽无所属专辑歌曲",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    r(
                      F,
                      {
                        modelValue: o(g).config.classificationMusicFile,
                        "onUpdate:modelValue":
                          s[5] ||
                          (s[5] = (e) =>
                            (o(g).config.classificationMusicFile = e)),
                        label: "下载歌曲按专辑分类",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  M.value &&
                  M.value.page.size > 0 &&
                  0 !== (null == (u = M.value) ? void 0 : u.list.length)
                    ? (e(),
                      t("div", gl, [
                        r(
                          j,
                          { type: "primary", onClick: B },
                          { default: c(() => [f("仅下载本页 ")]), _: 1 }
                        ),
                        r(
                          j,
                          { type: "primary", onClick: P },
                          { default: c(() => [f("下载所有页 ")]), _: 1 }
                        ),
                      ]))
                    : b("", !0),
                ]),
              ],
              512
            ),
            void 0 === M.value || 0 === o(g).lastSearch.length
              ? (e(),
                t(
                  "div",
                  {
                    key: 0,
                    style: d({ "margin-top": A.value + "px" }),
                    class: "history",
                  },
                  [
                    l("div", yl, [r(T), bl]),
                    l("div", wl, [
                      (e(!0),
                      t(
                        h,
                        null,
                        v(
                          o(y).searchHistory.value,
                          (l) => (
                            e(),
                            t(
                              "div",
                              {
                                onClick: (e) => (o(g).lastSearch = l),
                                class: "search-tag",
                              },
                              m(l),
                              9,
                              kl
                            )
                          )
                        ),
                        256
                      )),
                    ]),
                    o(g).searchHistory.length > 0
                      ? (e(),
                        t(
                          "div",
                          {
                            key: 0,
                            class: "clear-all-history",
                            onClick:
                              s[6] || (s[6] = (e) => (o(g).searchHistory = [])),
                          },
                          [r(N)]
                        ))
                      : b("", !0),
                  ],
                  4
                ))
              : (e(),
                t(
                  "div",
                  {
                    key: 1,
                    class: "search-list",
                    style: d({ "margin-top": A.value + "px" }),
                  },
                  [
                    void 0 === M.value || 0 === M.value.list.length
                      ? (e(),
                        t("div", _l, [
                          r(
                            q,
                            {
                              description:
                                (null == (p = M.value) ? void 0 : p.page.size) >
                                0
                                  ? "共搜索到" +
                                    (null == (_ = M.value)
                                      ? void 0
                                      : _.page.size) +
                                    "条数据,但是过滤后没有发现符合条件的数据。请检查搜索过滤条件是否设置正确。"
                                  : "服务器请求搜索结果失败,请重试。",
                            },
                            null,
                            8,
                            ["description"]
                          ),
                        ]))
                      : (e(),
                        t("div", Cl, [
                          l("div", Il, [
                            r(
                              O,
                              {
                                class: "my-tb",
                                data: M.value.list,
                                style: { width: "100%", "z-index": "0" },
                              },
                              {
                                default: c(() => [
                                  r(R, {
                                    formatter: V,
                                    prop: "time_public",
                                    label: "发表时间",
                                    width: "120",
                                  }),
                                  r(
                                    R,
                                    {
                                      "show-overflow-tooltip": !0,
                                      prop: "title",
                                      label: "歌曲名",
                                      "min-width": "300",
                                    },
                                    {
                                      default: c((a) => [
                                        l("div", Ml, [
                                          "flac" === a.row.extra
                                            ? (e(), t("div", Sl, " 无损 "))
                                            : b("", !0),
                                          l("div", Vl, m(a.row.title), 1),
                                        ]),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  r(R, {
                                    "show-overflow-tooltip": !0,
                                    formatter: U,
                                    prop: "singer.name",
                                    label: "艺术家",
                                    width: "200",
                                  }),
                                  r(R, {
                                    "show-overflow-tooltip": !0,
                                    prop: "album",
                                    label: "专辑",
                                    width: "200",
                                  }),
                                  r(R, {
                                    formatter: z,
                                    "show-overflow-tooltip": !0,
                                    prop: "notice",
                                    label: "品质",
                                    width: "250",
                                  }),
                                  r(
                                    R,
                                    { fixed: "right", label: "操作" },
                                    {
                                      default: c((e) => [
                                        r(
                                          j,
                                          {
                                            link: "",
                                            type: "primary",
                                            size: "small",
                                            onClick: (t) => L(e.row),
                                          },
                                          {
                                            default: c(() => [f("下载 ")]),
                                            _: 2,
                                          },
                                          1032,
                                          ["onClick"]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["data"]
                            ),
                          ]),
                          M.value
                            ? (e(),
                              t("div", xl, [
                                r(
                                  K,
                                  {
                                    "current-page": w.value,
                                    "onUpdate:currentPage": [
                                      s[7] || (s[7] = (e) => (w.value = e)),
                                      C,
                                    ],
                                    background: "",
                                    class: "tab-split",
                                    "page-size": 30,
                                    layout: "prev, pager, next",
                                    total: parseInt(M.value.page.size + ""),
                                  },
                                  null,
                                  8,
                                  ["current-page", "total"]
                                ),
                                l(
                                  "div",
                                  Ul,
                                  " 搜索到" +
                                    m(M.value.page.size) +
                                    "条数据,当前第" +
                                    m(M.value.page.cur) +
                                    "页 ",
                                  1
                                ),
                              ]))
                            : b("", !0),
                        ])),
                  ],
                  4
                )),
          ])
        );
      };
    },
  }),
  jl = ne(zl, [["__scopeId", "data-v-7e6add5e"]]),
  Al = { class: "user-info" },
  Ll = { class: "info-area" },
  Bl = { class: "tag" },
  Dl = { class: "area" },
  Pl = { class: "nickname" },
  Hl = { class: "reg-time" },
  Fl = ne(
    a({
      __name: "UserInfo",
      props: { userInfo: {} },
      setup: (a) => (a, i) => {
        const s = n("el-avatar");
        return (
          e(),
          t("div", Al, [
            r(
              s,
              { class: "avatar", size: 100, src: a.userInfo.profile.avatarUrl },
              null,
              8,
              ["src"]
            ),
            l(
              "div",
              {
                class: "bg",
                style: d({
                  background:
                    "no-repeat center/cover url(" +
                    a.userInfo.profile.backgroundUrl +
                    ")",
                }),
              },
              null,
              4
            ),
            l("div", Ll, [
              l("div", null, "UID " + m(a.userInfo.profile.userId), 1),
              l(
                "div",
                Bl,
                m(
                  0 === a.userInfo.profile.vipType
                    ? "非会员"
                    : "会员" + a.userInfo.profile.viptypeVersion + "级别"
                ),
                1
              ),
              l("div", Dl, [l("div", Pl, m(a.userInfo.profile.nickname), 1)]),
              l(
                "div",
                Hl,
                "注册时间 " + m(o(ue)(a.userInfo.profile.createTime)),
                1
              ),
            ]),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-3fd0c087"]]
  ),
  Tl = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
  El = [
    l(
      "path",
      {
        fill: "currentColor",
        d: "M13 19c0 .34.04.67.09 1H6.5c-1.5 0-2.81-.5-3.89-1.57C1.54 17.38 1 16.09 1 14.58c0-1.3.39-2.46 1.17-3.48S4 9.43 5.25 9.15c.42-1.53 1.25-2.77 2.5-3.72S10.42 4 12 4c1.95 0 3.6.68 4.96 2.04C18.32 7.4 19 9.05 19 11c1.15.13 2.1.63 2.86 1.5c.51.57.84 1.21 1 1.92A5.908 5.908 0 0 0 19 13h-2v-2c0-1.38-.5-2.56-1.46-3.54C14.56 6.5 13.38 6 12 6s-2.56.5-3.54 1.46C7.5 8.44 7 9.62 7 11h-.5c-.97 0-1.79.34-2.47 1.03c-.69.68-1.03 1.5-1.03 2.47s.34 1.79 1.03 2.5c.68.66 1.5 1 2.47 1h6.59c-.05.33-.09.66-.09 1m4.75.43l-1.59-1.59L15 19l2.75 3l4.75-4.75l-1.16-1.41l-3.59 3.59Z",
      },
      null,
      -1
    ),
  ];
const Nl = {
    name: "mdi-cloud-check-outline",
    render: function (l, a) {
      return e(), t("svg", Tl, El);
    },
  },
  ql = { class: "content" },
  Rl = { key: 0, class: "no-login" },
  Ol = { key: 1, class: "login" },
  Kl = { class: "list-content" },
  Ql = { class: "select-list" },
  Jl = { class: "list-right" },
  Zl = { class: "list-name" },
  Yl = { class: "list-size" },
  Wl = { class: "search-hint" },
  Gl = { class: "title-tip" },
  Xl = { class: "title-tip" },
  $l = { key: 0, class: "flac-tip" },
  ea = { class: "name" },
  ta = a({
    __name: "Netease",
    setup(a) {
      const { basicStore: p } = te(),
        h = le(p),
        v = s(""),
        g = s(""),
        y = s(1),
        w = s(50),
        k = s(),
        _ = s(),
        C = s(0),
        I = {
          switchLoginQRCode() {
            se.getNeteaseQRCode().then((e) => {
              (g.value = e.qrcode.uniKey), this.checkLoginState();
            });
          },
          checkLoginState() {
            V = setInterval(async () => {
              let e = await se.checkESState(g.value);
              switch (e.code) {
                case 800:
                  (v.value = "验证码过期，自动切换中..."),
                    I.switchLoginQRCode(),
                    clearInterval(V);
                  break;
                case 801:
                  v.value = "等待用户扫码";
                  break;
                case 802:
                  v.value = "等待确认";
                  break;
                case 803:
                  clearInterval(V),
                    (v.value = "登录成功"),
                    (p.netease.isLogin = !0),
                    (p.netease.token = e.cookie),
                    this.getUserInfo().then((e) => I.fetchUserPlaylist());
              }
            }, 2e3);
          },
          getUserInfo: () =>
            se.getNetEaseUserInfo().then((e) => {
              p.netease.user = e;
            }),
          async initAnonimous() {
            let e = await se.initAnonimous();
            p.netease.anonimousCookie = e.cookie;
          },
          setUserCookie: (e) => se.setESCookie({ cookie: e }),
          fetchUserPlaylist() {
            let e = p.netease.user.profile.userId;
            return se.getUserPlaylist(e + "").then((e) => {
              z.value = e.list;
              let t = e.list[0].id;
              return (
                (U.value = e.list[0].trackCount),
                (x.value = t),
                (B.value = z.value.map((e) => ({ value: e, label: e.name }))),
                this.fetchPlayListMusic(t + "")
              );
            });
          },
          fetchPlayListMusic: (e) =>
            se.getMusicListByPlaylistID(e, y.value, w.value).then((e) => {
              void 0 !== e && 20001 !== e.code && (k.value = e.list);
            }),
        };
      let V = null;
      u(() => {
        var e, t;
        if (p.netease.isLogin) {
          let e = p.netease.token;
          I.setUserCookie(e).then((e) => {
            I.getUserInfo().then((e) => I.fetchUserPlaylist());
          });
        } else
          I.initAnonimous().then((e) => {
            I.switchLoginQRCode();
          });
        C.value =
          (null == (e = _.value) ? void 0 : e.offsetHeight) +
          (null == (t = _.value) ? void 0 : t.offsetTop);
      }),
        M(() => {
          clearInterval(V);
        });
      const x = s(),
        U = s(0),
        z = s(),
        A = (e) => {
          (y.value = e), I.fetchPlayListMusic(x.value);
        },
        L = () => {
          se.esLogout().then((e) => {
            (p.netease.isLogin = !1),
              (p.netease.token = ""),
              I.initAnonimous().then((e) => {
                I.switchLoginQRCode();
              });
          });
        },
        B = s([]),
        D = (e) => {
          for (let t of B.value)
            t.value.id === e && (U.value = t.value.trackCount);
          A(1);
        },
        P = (e) => {
          let t = "未知";
          if (100 === H(e.privileges)) return "暂无版权";
          switch (e.fee) {
            case 0:
              t = "免费歌曲";
              break;
            case 1:
              t = "会员播放";
              break;
            case 4:
              t = "购买专辑";
              break;
            case 8:
              t = "会员下载";
              break;
            default:
              t = "未知类型" + e.fee;
          }
          return t;
        },
        H = function (e, t = "") {
          return e
            ? "download" === t
              ? 0
              : e.pl <= 0 && (e.fee > 63 || e.flag > 4095)
              ? 1e4
              : "download" == t && e.dl <= 0 && (e.fee > 63 || e.flag > 4095)
              ? 10001
              : null != e.st && e.st < 0
              ? 100
              : e.fee > 0 && 8 !== e.fee && 0 === e.payed && e.pl <= 0
              ? 10
              : 16 === e.fee || (4 === e.fee && 2048 & e.flag)
              ? 11
              : (0 === e.fee || e.payed) && e.pl > 0 && 0 === e.dl
              ? 1e3
              : 0 === e.pl && 0 === e.dl
              ? 100
              : 0
            : -1;
        },
        F = s(!1),
        T = s({}),
        E = s("");
      return (a, s) => {
        const u = n("el-dialog"),
          I = n("el-avatar"),
          M = n("el-select-v2"),
          V = n("el-table-column"),
          z = n("el-button"),
          N = n("el-table"),
          q = n("el-pagination");
        return (
          e(),
          t("div", ql, [
            r(
              u,
              {
                class: "dialog-attr",
                "destroy-on-close": "",
                "align-center": "",
                width: "90%",
                modelValue: F.value,
                "onUpdate:modelValue": s[0] || (s[0] = (e) => (F.value = e)),
                title: "查找歌曲 - " + T.value.title,
              },
              {
                default: c(() => [
                  r(jl, { search: E.value }, null, 8, ["search"]),
                ]),
                _: 1,
              },
              8,
              ["modelValue", "title"]
            ),
            l(
              "div",
              { ref_key: "head", ref: _, class: "head" },
              " 网易云 - " +
                m(
                  o(h).netease.value.isLogin
                    ? o(h).netease.value.user.profile.nickname
                    : "请登录"
                ),
              513
            ),
            l(
              "div",
              {
                class: "areas",
                style: d({ height: "calc(100vh - " + C.value + "px)" }),
              },
              [
                o(h).netease.value.isLogin
                  ? (e(),
                    t("div", Ol, [
                      r(Fl, { "user-info": o(h).netease.value.user }, null, 8, [
                        "user-info",
                      ]),
                      l("div", Kl, [
                        r(
                          M,
                          {
                            filterable: "",
                            class: "playlist",
                            modelValue: x.value,
                            "onUpdate:modelValue":
                              s[1] || (s[1] = (e) => (x.value = e)),
                            "value-key": "value.id",
                            options: B.value,
                            placeholder: "选择一个歌单",
                            onChange: D,
                            size: "large",
                          },
                          {
                            default: c(({ item: e }) => [
                              l("div", Ql, [
                                r(
                                  I,
                                  {
                                    size: "small",
                                    class: "list-img",
                                    src: e.value.coverImgUrl,
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                                l("div", Jl, [
                                  l("span", Zl, m(e.value.name), 1),
                                  l(
                                    "span",
                                    Yl,
                                    m(e.value.trackCount) + "首",
                                    1
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue", "options"]
                        ),
                        l(
                          "span",
                          Wl,
                          "结果列表[搜索到" +
                            m(U.value) +
                            "条数据,当前第" +
                            m(y.value) +
                            "页]",
                          1
                        ),
                        l("div", { onClick: L }, "退出登录"),
                        r(
                          N,
                          {
                            class: "my-tb",
                            data: k.value,
                            style: { width: "100%", "z-index": "0" },
                          },
                          {
                            default: c(() => [
                              r(
                                V,
                                {
                                  formatter: (e) =>
                                    o(ue)(e.publishTime).split(" ")[0],
                                  prop: "publishTime",
                                  label: "发表时间",
                                  width: "120",
                                },
                                null,
                                8,
                                ["formatter"]
                              ),
                              r(
                                V,
                                {
                                  "show-overflow-tooltip": !0,
                                  prop: "docid",
                                  label: "版权",
                                  width: "100",
                                },
                                {
                                  default: c((e) => [
                                    l("div", Gl, [
                                      l(
                                        "div",
                                        {
                                          class: S([
                                            "fee-tip",
                                            {
                                              "vip-tip":
                                                1 === e.row.fee ||
                                                4 === e.row.fee,
                                              "no-ip-tip":
                                                100 === H(e.row.privileges),
                                              "vip-down": 8 === e.row.fee,
                                            },
                                          ]),
                                        },
                                        m(P(e.row)),
                                        3
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                              r(
                                V,
                                {
                                  "show-overflow-tooltip": !0,
                                  prop: "title",
                                  label: "歌曲名",
                                  "min-width": "300",
                                },
                                {
                                  default: c((a) => [
                                    l("div", Xl, [
                                      "flac" === a.row.extra
                                        ? (e(), t("div", $l, " 无损 "))
                                        : b("", !0),
                                      l("div", ea, m(a.row.title), 1),
                                      a.row.cloud
                                        ? (e(),
                                          i(o(Nl), {
                                            key: 1,
                                            style: { "margin-left": "10px" },
                                          }))
                                        : b("", !0),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                              r(
                                V,
                                {
                                  "show-overflow-tooltip": !0,
                                  formatter: (e) =>
                                    e.author.map((e) => e.name).join(" / "),
                                  prop: "singer.name",
                                  label: "艺术家",
                                  width: "200",
                                },
                                null,
                                8,
                                ["formatter"]
                              ),
                              r(V, {
                                "show-overflow-tooltip": !0,
                                prop: "album",
                                label: "专辑",
                                width: "200",
                              }),
                              r(
                                V,
                                { fixed: "right", label: "操作" },
                                {
                                  default: c((t) => [
                                    r(
                                      z,
                                      {
                                        type:
                                          100 === H(t.row.privileges)
                                            ? "info"
                                            : "primary",
                                        size: "small",
                                        onClick: (e) => {
                                          return 100 === H(t.row.privileges)
                                            ? null
                                            : ((l = t.row),
                                              void se
                                                .postDownload(l, {
                                                  ...p.config,
                                                  platform: "wyy",
                                                })
                                                .then((e) => {
                                                  200 === e.code &&
                                                    j({
                                                      title: "成功",
                                                      message:
                                                        "成功提交任务: " +
                                                        l.author_simple +
                                                        " - " +
                                                        l.title,
                                                      type: "success",
                                                    });
                                                }));
                                          var l;
                                        },
                                      },
                                      { default: c(() => [f("下载 ")]), _: 2 },
                                      1032,
                                      ["type", "onClick"]
                                    ),
                                    100 === H(t.row.privileges)
                                      ? (e(),
                                        i(
                                          z,
                                          {
                                            key: 0,
                                            type: "warning",
                                            size: "small",
                                            onClick: (e) => {
                                              return (
                                                (l = t.row),
                                                (T.value = l),
                                                (F.value = !0),
                                                void (E.value =
                                                  l.author_simple +
                                                  " " +
                                                  l.title +
                                                  " " +
                                                  l.album)
                                              );
                                              var l;
                                            },
                                          },
                                          {
                                            default: c(() => [f("在线匹配 ")]),
                                            _: 2,
                                          },
                                          1032,
                                          ["onClick"]
                                        ))
                                      : b("", !0),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["data"]
                        ),
                        r(
                          q,
                          {
                            "current-page": y.value,
                            "onUpdate:currentPage": [
                              s[2] || (s[2] = (e) => (y.value = e)),
                              A,
                            ],
                            background: "",
                            class: "tab-split",
                            "page-size": w.value,
                            layout: "prev, pager, next",
                            total: U.value,
                          },
                          null,
                          8,
                          ["current-page", "page-size", "total"]
                        ),
                      ]),
                    ]))
                  : (e(),
                    t("div", Rl, [
                      l("div", null, m(v.value), 1),
                      r(
                        Q,
                        {
                          value:
                            "http://music.163.com/login?codekey=" + g.value,
                          size: 200,
                          level: "H",
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ])),
              ],
              4
            ),
          ])
        );
      };
    },
  }),
  la = ne(ta, [["__scopeId", "data-v-7b53cdab"]]),
  aa = (e) => (w("data-v-46b358ca"), (e = e()), k(), e),
  na = { class: "content" },
  oa = aa(() => l("div", { class: "meta-title" }, "下载管理", -1)),
  ia = { class: "view-options" },
  ra = aa(() =>
    l("div", { class: "songer-list" }, [l("div", null, "暂无数据。")], -1)
  ),
  sa = ne(
    a({
      __name: "Download",
      setup(a) {
        const n = s(0);
        return (
          u(() => {
            se.getLocalFiles().then((e) => {});
          }),
          (a, o) => (
            e(),
            t("div", na, [
              oa,
              l("div", ia, [
                l(
                  "div",
                  { class: S({ isCheckedStyle: 0 == n.value }) },
                  "按文件夹",
                  2
                ),
                l(
                  "div",
                  { class: S({ isCheckedStyle: 1 == n.value }) },
                  "按专辑",
                  2
                ),
                l(
                  "div",
                  { class: S({ isCheckedStyle: 2 == n.value }) },
                  "按歌手",
                  2
                ),
                l(
                  "div",
                  { class: S({ isCheckedStyle: 3 == n.value }) },
                  "不分类",
                  2
                ),
              ]),
              ra,
            ])
          )
        );
      },
    }),
    [["__scopeId", "data-v-46b358ca"]]
  ),
  ua = { key: 0, class: "content" },
  ca = { class: "dialog-footer" },
  da = "140px",
  pa = a({
    __name: "Cloud",
    setup(a) {
      const u = s(),
        d = s(!1),
        p = s(""),
        g = s(""),
        y = s(),
        { basicStore: w } = te(),
        k = s();
      _(p, (e, t, l) => {
        se.searchMusic(encodeURIComponent(e), 1, "wyy", 100).then((e) => {
          (y.value = void 0), (k.value = e.list);
        });
      });
      const C = V(() => {
        var e;
        return null == (e = u.value)
          ? void 0
          : e.list.filter((e) => e.fileName.includes(g.value));
      });
      let I = s({});
      const M = (e) => {
        se.bindSid2Asid({
          sid: I.value.songId,
          asid: e,
          uid: w.netease.user.account.id,
        }).then((e) => {
          200 === e.code
            ? (j({ title: "成功", message: "修改信息成功。", type: "success" }),
              (d.value = !d.value))
            : j({ title: "错误", message: e.message, type: "error" });
        });
      };
      return (
        se.getNeteaseCloud().then((e) => {
          (u.value = {}), (u.value = e);
        }),
        (a, s) => {
          const w = n("el-table-column"),
            _ = n("el-input"),
            S = n("el-button"),
            V = n("el-table"),
            x = n("el-descriptions-item"),
            U = n("el-tag"),
            z = n("el-descriptions"),
            j = n("el-form-item"),
            A = n("el-option"),
            L = n("el-select"),
            B = n("el-form"),
            D = n("el-dialog");
          return (
            e(),
            t(
              h,
              null,
              [
                u.value
                  ? (e(),
                    t("div", ua, [
                      l(
                        "h1",
                        null,
                        "云盘歌曲纠错 " +
                          m(u.value.hasMore ? "有更多" : "没有更多"),
                        1
                      ),
                      r(
                        V,
                        {
                          class: "my-tb",
                          data: C.value,
                          style: { width: "100%", "z-index": "0" },
                        },
                        {
                          default: c(() => [
                            r(
                              w,
                              {
                                formatter: (e) =>
                                  o(ue)(e.addTime).split(" ")[0],
                                prop: "publishTime",
                                label: "上传时间",
                                width: "120",
                              },
                              null,
                              8,
                              ["formatter"]
                            ),
                            r(w, {
                              "show-overflow-tooltip": !0,
                              prop: "songName",
                              label: "歌曲名",
                              "min-width": "300",
                            }),
                            r(
                              w,
                              {
                                "show-overflow-tooltip": !0,
                                formatter: (e) => e.artist,
                                prop: "singer.name",
                                label: "艺术家",
                                width: "200",
                              },
                              null,
                              8,
                              ["formatter"]
                            ),
                            r(w, {
                              "show-overflow-tooltip": !0,
                              prop: "album",
                              label: "专辑",
                              width: "200",
                            }),
                            r(
                              w,
                              { fixed: "right", "min-width": "100" },
                              {
                                header: c(() => [
                                  r(
                                    _,
                                    {
                                      modelValue: g.value,
                                      "onUpdate:modelValue":
                                        s[0] || (s[0] = (e) => (g.value = e)),
                                      size: "default",
                                      placeholder: "输入过滤歌曲",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                                default: c((e) => [
                                  r(
                                    S,
                                    {
                                      type: "primary",
                                      size: "small",
                                      onClick: (t) => {
                                        return (
                                          (l = e.row),
                                          (I.value = l),
                                          (d.value = !d.value),
                                          void (p.value =
                                            I.value.songName +
                                            " " +
                                            I.value.artist)
                                        );
                                        var l;
                                      },
                                    },
                                    { default: c(() => [f("修改 ")]), _: 2 },
                                    1032,
                                    ["onClick"]
                                  ),
                                  r(
                                    S,
                                    {
                                      type: "danger",
                                      size: "small",
                                      onClick: (t) => (
                                        e.row,
                                        void se
                                          .delNeteaseCloud()
                                          .then((e) => {})
                                      ),
                                    },
                                    { default: c(() => [f("删除 ")]), _: 2 },
                                    1032,
                                    ["onClick"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["data"]
                      ),
                    ]))
                  : b("", !0),
                r(
                  D,
                  {
                    modelValue: d.value,
                    "onUpdate:modelValue":
                      s[7] || (s[7] = (e) => (d.value = e)),
                    title: "修改歌曲匹配信息 - " + o(I).fileName,
                  },
                  {
                    footer: c(() => [
                      l("span", ca, [
                        r(
                          S,
                          { onClick: s[4] || (s[4] = (e) => (d.value = !1)) },
                          { default: c(() => [f("取消")]), _: 1 }
                        ),
                        r(
                          S,
                          {
                            type: "danger",
                            onClick: s[5] || (s[5] = (e) => M(0)),
                          },
                          { default: c(() => [f("取消匹配")]), _: 1 }
                        ),
                        r(
                          S,
                          {
                            type: "primary",
                            onClick: s[6] || (s[6] = (e) => M(y.value)),
                          },
                          { default: c(() => [f(" 确认匹配 ")]), _: 1 }
                        ),
                      ]),
                    ]),
                    default: c(() => [
                      r(B, null, {
                        default: c(() => [
                          r(
                            j,
                            { label: "当前歌曲识别信息", "label-width": da },
                            {
                              default: c(() => [
                                r(
                                  z,
                                  {
                                    title: o(I).fileName,
                                    column: 3,
                                    border: "",
                                  },
                                  {
                                    default: c(() => [
                                      r(
                                        x,
                                        {
                                          label: "歌曲名",
                                          "label-align": "right",
                                          align: "left",
                                        },
                                        {
                                          default: c(() => [
                                            f(m(o(I).songName), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      r(
                                        x,
                                        {
                                          label: "歌手",
                                          "label-align": "right",
                                          align: "left",
                                        },
                                        {
                                          default: c(() => [
                                            f(m(o(I).artist), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      r(
                                        x,
                                        {
                                          label: "专辑",
                                          "label-align": "right",
                                          align: "center",
                                        },
                                        {
                                          default: c(() => [
                                            f(m(o(I).album), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      r(
                                        x,
                                        {
                                          label: "文件名",
                                          "label-align": "right",
                                          align: "left",
                                        },
                                        {
                                          default: c(() => [
                                            r(
                                              U,
                                              { size: "small" },
                                              {
                                                default: c(() => [
                                                  f(m(o(I).fileName), 1),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      r(
                                        x,
                                        {
                                          label: "参考搜索词",
                                          "label-align": "right",
                                          align: "left",
                                        },
                                        {
                                          default: c(() => [
                                            f(
                                              m(
                                                o(I).songName +
                                                  " " +
                                                  o(I).artist
                                              ),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["title"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          r(
                            j,
                            { label: "搜索歌曲名称", "label-width": da },
                            {
                              default: c(() => [
                                r(
                                  _,
                                  {
                                    modelValue: p.value,
                                    "onUpdate:modelValue":
                                      s[1] || (s[1] = (e) => (p.value = e)),
                                    autocomplete: "off",
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          r(
                            j,
                            { label: "服务器结果", "label-width": da },
                            {
                              default: c(() => [
                                r(
                                  L,
                                  {
                                    modelValue: y.value,
                                    "onUpdate:modelValue":
                                      s[2] || (s[2] = (e) => (y.value = e)),
                                    placeholder: "请选择一个搜索结果",
                                  },
                                  {
                                    default: c(() => [
                                      (e(!0),
                                      t(
                                        h,
                                        null,
                                        v(k.value, (t) => {
                                          return (
                                            e(),
                                            i(
                                              A,
                                              {
                                                label:
                                                  ((l = t),
                                                  l.singer +
                                                    " - " +
                                                    l.title +
                                                    " ｜ " +
                                                    l.album),
                                                value: t.musicid,
                                              },
                                              null,
                                              8,
                                              ["label", "value"]
                                            )
                                          );
                                          var l;
                                        }),
                                        256
                                      )),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          r(
                            j,
                            { label: "指定歌曲ID", "label-width": da },
                            {
                              default: c(() => [
                                r(
                                  _,
                                  {
                                    modelValue: y.value,
                                    "onUpdate:modelValue":
                                      s[3] || (s[3] = (e) => (y.value = e)),
                                    autocomplete: "off",
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "title"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  }),
  fa = [
    {
      path: "/",
      name: "Index",
      component: zt,
      children: [
        { path: "home", alias: "/", component: it },
        { path: "search", component: jl },
        { path: "netease", component: la },
        { path: "download", component: sa },
        {
          path: "cloud",
          component: ne(pa, [["__scopeId", "data-v-c63c1bb5"]]),
        },
      ],
    },
    { path: "/home", name: "home", component: it },
    { path: "/:catchAll(.*)", component: Lt },
  ],
  ha = O({ history: K(), routes: fa }),
  va = x(oe),
  ma = H();
ma.use(J), va.use(ha), va.use(ma), va.use(A), va.mount("#app");
