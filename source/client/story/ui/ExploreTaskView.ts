/**
 * 3D Foundation Project
 * Copyright 2018 Smithsonian Institution
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

import { customElement, html } from "@ff/ui/CustomElement";

import CVExploreTask from "../components/CVExploreTask";
import { TaskView } from "../components/CVTask";

////////////////////////////////////////////////////////////////////////////////

@customElement("sv-explore-task-view")
export default class ExploreTaskView extends TaskView<CVExploreTask>
{
    protected render()
    {
        return html`<div class="sv-placeholder">Preview mode.</div>`;
    }
}