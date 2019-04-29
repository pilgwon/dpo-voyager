/**
 * 3D Foundation Project
 * Copyright 2019 Smithsonian Institution
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import CustomElement, { customElement } from "@ff/ui/CustomElement";

import ContentView from "./ContentView";

import MiniApplication, { IMiniApplicationProps } from "../../applications/MiniApplication";

import "./styles.scss";

////////////////////////////////////////////////////////////////////////////////


/**
 * Main UI view for the Voyager Mini application.
 */
@customElement("voyager-mini")
export default class MainView extends CustomElement
{
    readonly application: MiniApplication;

    constructor(application?: MiniApplication)
    {
        super();

        if (application) {
            this.application = application;
        }
        else {
            const props: IMiniApplicationProps = {
                document: this.getAttribute("document"),
                model: this.getAttribute("model"),
                geometry: this.getAttribute("geometry"),
                texture: this.getAttribute("texture"),
            };

            this.application = new MiniApplication(null, props);
        }

        window["voyagerMini"] = this.application;
    }

    protected firstConnected()
    {
        super.firstConnected();

        const system = this.application.system;
        new ContentView(system).appendTo(this);
    }
}