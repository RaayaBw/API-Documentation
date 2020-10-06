---
id: Get-Allowance
title: Get Allowance
---
The code snippet below shows how to get edge's seam allowance. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
# get an existing material surface area (works only on shapes and artworks)
BwApi.EdgeSeamAllowanceGet(garmentId, shapeId, edgeId)
```
<!--C++-->
```cpp
// get an existing material surface area (works only on shapes and artworks)
float seamAllowance;
BwApiEdgeSeamAllowanceGet( garmentId,  shapeId, edgeId, &seamAllowance);
```
<!--C#-->
```csharp
// get an existing material surface area (works only on shapes and artworks)
float seamAllowance;
BwApi.EdgeSeamAllowanceGet(garmentId,  shapeId, edgeId,out seamAllowance);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>



