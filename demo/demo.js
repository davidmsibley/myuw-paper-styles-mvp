import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-button/paper-button.js';

class OpenDialog extends PolymerElement {
  static get template() {
    return html`
    <style>

    </style>

    <paper-button class="md-button md-button-warn-custom" on-tap="_openDialog" ><strong>[[titleName]] ([[count]])</strong></paper-button>

     <paper-dialog id="dialog">
        <div class="md-toolbar-tools">
            <h2 class="ng-binding">[[titleName]] ([[count]])</h2>
            <span flex="" class="flex"></span>
            <paper-button dialog-dismiss><iron-icon icon="close"></iron-icon></paper-button>
        </div>
        <ul class="list-group">
          <template is="dom-repeat" items="[[dataList]]" if="{{dataExist(count)}}">
             <li class="list-group-item-md-card">
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
             </li>
           </template>
           <template is="dom-if"  if="{{!dataExist(count)}}">
             <li class="list-group-item-md-card">[[noData]]</li>
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
            },
            classColor: function(counter) {
                if (counter==0) {
                    console.log('list-group-item-md-card-withouttopline counter value....'+counter);
                    return 'list-group-item-md-card-withouttopline';
                }
                else {
                    console.log('list-group-item-md-card counter value....'+counter);
                    return 'list-group-item-md-card';
                }
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
window.customElements.define('open-dialog', OpenDialog);
