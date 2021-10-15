import { LitElement } from 'lit';

export const commonLangConfig = {
  "cancelDialogButton": {
    "label_en": "Cancel", 
    "label_es": "Cancelar"
  },
  "confirmDialogButton": {
    "label_en": "Accept", 
    "label_es": "Aceptar"
  }
}

export class CommonCore extends LitElement {
  static get properties() {
    return {
      config: { type: Object },
      flag: { type: String },
      lang: { type: String }
    };
  }

  constructor() {
    super();
    this.config = {};
    this.lang = "en";
  }

  updated(updates) {
    if (updates.has('config') && JSON.stringify(this.config) != "{}" && sessionStorage.getItem("userSession")) {
      this.authorized()
    }
    if (updates.has("lang")) {
      this.changeFlag()
      this.dispatchEvent(new CustomEvent('change-lang', {
        detail: {lang: this.lang},
        bubbles: true,
        composed: true
      }))  
    }
  }

  // Override this method once authorized
  authorized() { }

  /**
   * Populating fetch api
   * @param {*} urlParams the url api with params
   */
  fetchApi(urlParams) {
    return fetch(urlParams).then(async r => {
      if (r.status == 200) {
        return r.json()
      } else {
        let err = await r.json()
        throw err
      }
    }).then(j => {
      return j
    }).catch(e => {
      this.error(e)
    })
  }

  error(e) {
    this.dispatchEvent(new CustomEvent("error", {
      detail: e,
      bubbles: true,
      composed: true
    }))
  }

  showPwd(e) {
    if (e.pointerId == -1) {
      e.target.type = e.target.type == "password" ? "text" : "password";
    }
  }

  changeLang() {
    if (this.flag == "en") {
      this.lang = "en"
      this.flag = "es"
    } else {
      this.lang = "es"
      this.flag = "en"
    }
    return this.flag
  }

  changeFlag() {
    if (this.lang == "en") {
      this.flag = "es"
    } else {
      this.flag = "en"
    }
  }
}