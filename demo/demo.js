import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';

class DemoDialog extends PolymerElement {
  static get template() {
    return html`
    <style>
      paper-button {
        margin: 10px;
      }
      app-toolbar {
        background-color: var(--primary-color);
        color: var(--primary-background-color);
        margin-top: 0;
      }
    </style>

    <paper-button raised on-tap="_openDialog" ><strong>[[titleName]] ([[count]])</strong></paper-button>

     <paper-dialog id="dialog">
        <app-toolbar>
            <h2 main-title>[[titleName]] ([[count]])</h2>
            <paper-button dialog-dismiss><iron-icon icon="close"></iron-icon></paper-button>
        </app-toolbar>
        <ul>
          <template is="dom-repeat" items="[[dataList]]" if="{{dataExist(count)}}">
             <paper-item>
                <template is="dom-if" if="[[propertyNotEmpty(item.degree)]]">
                    <span><strong>Degree &nbsp;</strong> [[item.degree]]<br/></span>
                </template>
                [[item.name]]<br/>
                <template is="dom-if" if="[[propertyNotEmpty(item.role)]]">
                    <span>[[item.role]]<br/></span>
                </template>
                <template is="dom-if" if="[[propertyNotEmpty(item.email)]]">
                    <span>Email: <a href="mailto:[[item.email]]">[[item.email]]</a></span>
                </template>

                <template is="dom-repeat" items="[[item.subPlans]]" if="[[propertyNotEmpty(item.subPlans)]]">
                    <span style="margin-left: 43px;">-&nbsp;[[item]]</span><br/>
                </template>
             </paper-item>
           </template>
           <template is="dom-if"  if="{{!dataExist(count)}}">
             <li>[[noData]]</li>
           </template>
        </ul>


     </paper-dialog>
`;
  }

    static get properties () {
        return {
            dataList: {
                type: Array
            },
            count: {
                type: Number
            },
            titleName: {
                type: String
            }
            ,
            height: {
                type: String
            }
            ,
            width: {
                type: String
            },
            bgColor: {
                type:String
            },
            noData: {
                type:String
            }

        };
    }
    _openDialog() {
    this.$.dialog.open();
   }
    dataExist(count) {
      if (count>0) {
          return true;
      }
      else {
          return false;
      }
   }
    propertyNotEmpty(data) {
        if (data != undefined) {
            return true;
        }
        else {
            return false;
        }
    }

}
window.customElements.define('demo-dialog', DemoDialog);
