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

import Component from "@ff/graph/Component";

////////////////////////////////////////////////////////////////////////////////

export default class CVAnalytics extends Component
{
    static readonly typeName: string = "CVAnalytics";

    static readonly text: string = "Analytics";
    static readonly icon: string = "";

    static readonly isSystemSingleton = true;

    private _title: string = "Untitled";

    setTitle(title: string)
    {
        this._title = title;
    }

    sendProperty(property: string, value?: any)
    {
        // track custom event
        if (typeof ga === "function" && ENV_PRODUCTION) {
            const text = value !== undefined ? value.toString() : undefined;
            ga("send", "event", this._title, property, text);
        }
    }
}