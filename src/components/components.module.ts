import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { ChatBoxComponent } from './chat-box/chat-box';
import { AddProductComponent } from './add-product/add-product';
import { GoogleMapComponent } from '../pages/googlemap/googlemap';


@NgModule({
	declarations: [ChatComponent,
    ChatBoxComponent,GoogleMapComponent,
    AddProductComponent
    ],
	imports: [],
	exports: [ChatComponent,GoogleMapComponent,
	ChatBoxComponent,
    AddProductComponent
    ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class ComponentsModule {}
