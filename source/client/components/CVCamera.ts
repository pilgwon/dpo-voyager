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

import CCamera, { EProjection } from "@ff/scene/components/CCamera";

import { IDocument, INode, ICamera } from "client/schema/document";

////////////////////////////////////////////////////////////////////////////////

export default class CVCamera extends CCamera
{
    static readonly typeName: string = "CVCamera";

    static readonly text: string = "Camera";
    static readonly icon: string = "video";

    get settingProperties() {
        return [
            this.ins.projection,
            this.ins.fov,
            this.ins.size,
            this.ins.near,
            this.ins.far,
        ]
    }

    fromDocument(document: IDocument, node: INode): number
    {
        if (!isFinite(node.camera)) {
            throw new Error("camera property missing in node");
        }

        const data = document.cameras[node.camera];

        if (data.type === "perspective") {
            this.ins.copyValues({
                projection: EProjection.Perspective,
                fov: data.perspective.yfov,
                near: data.perspective.znear,
                far: data.perspective.zfar
            });
        }
        else {
            this.ins.copyValues({
                projection: EProjection.Orthographic,
                size: data.orthographic.ymag,
                near: data.orthographic.znear,
                far: data.orthographic.zfar
            });
        }

        return node.camera;
    }

    toDocument(document: IDocument, node: INode): number
    {
        const ins = this.ins;

        const data = {} as ICamera;

        if (ins.projection.getValidatedValue() === EProjection.Perspective) {
            data.type = "perspective";
            data.perspective = {
                yfov: ins.fov.value,
                znear: ins.near.value,
                zfar: ins.far.value
            };
        }
        else {
            data.type = "orthographic";
            data.orthographic = {
                ymag: ins.size.value,
                znear: ins.near.value,
                zfar: ins.far.value
            }
        }

        document.cameras = document.cameras || [];
        const cameraIndex = document.cameras.length;
        document.cameras.push(data);
        return cameraIndex;
    }
}