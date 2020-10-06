---
id: Outputs
title: Outputs
---
For more information, refer to Sample plugin.
 
## Rendering an image
The code snippet below shows how to render the current garment as an image. The render image function receives a JSON file (as a string) that contains all the render image information. For more information, refer to: app installation folder\Resources\schema\v1\render.json.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  garment_id = BwApi.GarmentId()
  # assuming renderJson contains the above export render image settings
  BwApi.RenderImage(garment_id, renderJson)
```
<!--C++-->
```  cpp
  BwString garmentId;
  BwApiGarmentId(garmentId);
  // assuming renderJson contains the above export 3d
  BwApiRenderImage(garmentId, renderJson);
```
<!--C#-->
```  csharp
  string garmentId;
  BwApi.GarmentId(out garmentId);
  // assuming renderJson contains the above export 3d
  BwApi.RenderImage(garmentId, renderJson);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Exporting a 3D object
The code snippet below shows how to export the current garment as a 3D object . The export 3D object function receives a JSON file (as a string) that contains all the exported information. For more information, refer to: app installation folder\Resources\schema\v3\export_3d_object.json.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  garment_id = BwApi.GarmentId()
  # assuming export3dObjectJson contains the above export 3d object settings
  BwApi.RenderExport3DObject(garment_id, export3dObjectJson)
```
<!--C++-->
```  cpp
  BwString garmentId;
  BwApiGarmentId(garmentId);
  // assuming export3dObjectJson contains the above export 3d
  BwApiRenderExport3DObject(garmentId, export3dObjectJson);
```
<!--C#-->
```  csharp
  string garmentId;
  BwApi.GarmentId(out garmentId);
  // assuming export3dObjectJson contains the above export 3d
  BwApi.RenderExport3DObject(garmentId, export3dObjectJson);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>