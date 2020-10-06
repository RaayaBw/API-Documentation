---
id: Material
title: Material
---

This document provides you with basic material functionality. You can add new material, set material physics, remove materials, and so on. <br/>

Material can be fabric, seam (for edges), artwork, or trim.

For full documentation, refer to 'BWPluginAPI_Material.h' in the plugin pack.

## Importing U3M
The code snippet below shows how to import a material to a garment from a U3M format file. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```  python
  garment_id = BwApi.GarmentId()
  colorwayId = BwApi.ColorwayCurrentGet(garment_id )
  full_path = '<path to the u3m>'
  material_ids = MaterialImport(garmentId, colorwayId, fullPath)
```
<!--C++-->

```  cpp
  BwString garmentId;
  BwApiGarmentId(garmentId);
  int colorwayId;
  BwApiColorwayCurrentGet(BwApiStringGet(garmentId), &colorwayId);
  BwApiVectorInt* materialIds = BwApiVectorIntCreate();
  BwApiMaterialImport(BwApiStringGet(garmentId), colorwayId, "<path to the u3m>", materialIds);
```
<!--C#-->

```  csharp
  string garmentId;
  BwApi.GarmentId(out garmentId);
  int colorwayId;
  BwApi.ColorwayCurrentGet(garmentId, out colorwayId);
  BwApiVectorInt materialIds = new BwApiVectorInt();
  BwApi.MaterialImport(garmentId, colorwayId, "path to the u3m", materialIds);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Exporting U3M
The code snippet below shows how to export material from a garment in U3M format. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```  python
  garment_id = BwApi.GarmentId()
  colorwayId = BwApi.ColorwayCurrentGet(garment_id )
  full_path = '<path to export the u3m>'
  MaterialExport(garmentId, colorwayId, 1, fullPath)
```
<!--C++-->

```  cpp
  BwString garmentId;
  BwApiGarmentId(garmentId);
  int colorwayId;
  BwApiColorwayCurrentGet(BwApiStringGet(garmentId), &colorwayId);
  BwApiVectorInt* materialIds = BwApiVectorIntCreate();
  BwApiMaterialExport(BwApiStringGet(garmentId), colorwayId, 1, "<path to export the u3m>")
```
<!--C#-->

```csharp
  string garmentId;
  BwApi.GarmentId(out garmentId);
  int colorwayId;
  BwApi.ColorwayCurrentGet(garmentId, out colorwayId);
  BwApiVectorInt materialIds = new BwApiVectorInt();
  BwApi.MaterialExport(garmentId, colorwayId, 1, "path to export the u3m")
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting material by id
You can also get an existing material as a JSON string. The response looks like the example above. For more information, refer to: app installation folder\Resources\schema\v2\material.json.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
# get existing material as json string object
materialJson = BwApi.MaterialGet(garmentId, colorwayId, materialId)
```
<!--C++-->

```cpp
// get existing material as json string object
BwString materialJson;
BwApiMaterialGet(garmentId, colorwayId, materialId, materialJson);
```
<!--C#-->

```csharp
// get existing material as json string object
BwApiString materialJson = new BwApiString();
BwApi.MaterialGet(garmentId, colorwayId, materialId, out materialJson);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Deleting a material
The code snippet below shows how to delete an existing material. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
# delete an existing material
BwApi.MaterialDelete(garmentId, colorwayId, materialId)
```
<!--C++-->

```cpp
// delete an existing material
BwApiMaterialDelete(garmentId, colorwayId, materialId);
```
<!--C#-->

```csharp
// delete an existing material
BwApi.MaterialDelete(garmentId, colorwayId, materialId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Cloning material
The code snippet below shows how to clone an existing material to any colorway. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
# clone an existing material
newMaterialId = BwApi.MaterialClone(garmentId, colorwayId, materialId, destColorwayId)
```
<!--C++-->

```cpp
// clone an existing material
int newMaterialId;
BwApiMaterialClone(garmentId, colorwayId, materialId, destColorwayId, &newMaterialId);
```
<!--C#-->

```csharp
// clone an existing material
int newMaterialId;
BwApi.MaterialClone(garmentId, colorwayId, materialId, destColorwayId, out newMaterialId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Updating a material
The code snippet below explain how to update an existing material. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->


```python
# update an existing material
# assuming materialJson contains the above material
BwApi.MaterialUpdate(garmentId, colorwayId, materialId, materialJson)
```
<!--C++-->

```cpp
// update an existing material
// assuming materialJson contains the above material
BwApiMaterialUpdate(garmentId, colorwayId, materialId, materialJson);
```
<!--C#-->

```csharp
// update an existing material
// assuming materialJson contains the above material
BwApi.MaterialUpdate(garmentId, colorwayId, materialId, materialJson);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>
