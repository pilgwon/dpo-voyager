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

import Node from "@ff/graph/Node";

import CVToolManager from "../components/CVToolManager";

import CVViewTool from "../components/CVViewTool";
import CVRenderTool from "../components/CVRenderTool";
import CVTapeTool from "../components/CVTapeTool";
import CVSliceTool from "../components/CVSliceTool";

////////////////////////////////////////////////////////////////////////////////

export default class NVTools extends Node
{
    static readonly typeName: string = "NVTools";

    get toolManager() {
        return this.getComponent(CVToolManager);
    }

    createComponents()
    {
        this.createComponent(CVToolManager);
        this.createComponent(CVViewTool);
        this.createComponent(CVRenderTool);
        this.createComponent(CVTapeTool);
        this.createComponent(CVSliceTool);
    }
}