---
id: Assign-Material
title: Assign Material
---
The code snippet below shows how to assign fabric to an existing shape. <br/>
For more information, refer to [Material API](material.md). to learn how to add new material and retrieve its id.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  BwApi.ShapeMaterialIdSet(garmentId, shapeId, materialId)
```
<!--C++-->
```cpp
  BwApiShapeMaterialIdSet(garmentId, shapeId, materialId);
```
<!--C#-->
```csharp
  BwApiShapeMaterialIdSet(garmentId, shapeId, materialId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>