---
id: Shape
title: Shape API
---

This document provides you with basic shape functionality. You can create a shape, delete a shape, and so on.

A shape is construct from connected edges. For more information, refer  to [Edge API](edge.md).<br/>

For full documentation, refer to 'BWPluginAPI_Shape.h' in the plugin pack.

* [Creating a shape](#create-shape)
* [Retrieving the edges of a shape](#shape-edges)
* [Assigning fabric to a shape](#assign-fabric)
* [Deleting a shape](#delete-shape)
* [Custom user data](#custom-user-data)
* [Custom user data string](#custom-user-data-string)

<a name="create-shape"></a>
## Creating shape
The code snippet below shows how to create a new shape. <br/>
After the shape creation, there will be no representation of this shape in the system until you add edges to this shape. For more information, refer to [Edge API](edge.md).

Python:
```python
  shapeId = BwApi.ShapeCreate(garmentId)
```
C++:
```cpp
  int shapeId = 0;
  BwApiShapeCreate(garmentId, &shapeId);
```
C#:
```csharp
  int shapeId = 0;
  BwApi.ShapeCreate(garmentId, out shapeId);
```
<br/>

<a name="shape-edges"></a>
## Retrieving the edges of a shape
The code snippet below shows how to retrieve all edge ids of the given shape id.

Python:
```python
  edgeIds = BwApi.ShapeEdgeIds(garmentId, shapeId)
  for edge in edgeIds:
    pass  #do something with shape's edges
```
C++:
```cpp
  BwIntVector edgeIds = 0;
  BwApiShapeEdgeIds(garmentId, shapeId, edgeIds);
  for (int i=0; i<(int) edgeIds.size(); i++){
    //do something with shape's edges
  }
```
C#:
```csharp
  BwApiVectorInt edgeIds = new BwApiVectorInt();
  BwApi.ShapeEdgeIds(garmentId, shapeId, edgeIds);
  foreach (var edge in edges){
    //do something with shape's edges
  }
```
<br/>

<a name="assign-fabric"></a>
## Assigning fabric to a shape
The code snippet below shows how to assign fabric to an existing shape. <br/>
For more information, refer to [Material API](material.md). to learn how to add new material and retrieve its id.

Python:
```python
  BwApi.ShapeMaterialIdSet(garmentId, shapeId, materialId)
```
C++:
```cpp
  BwApiShapeMaterialIdSet(garmentId, shapeId, materialId);
```
C#:
```csharp
  BwApiShapeMaterialIdSet(garmentId, shapeId, materialId);
```
<br/>

<a name="delete-shape"></a>
## Deleting a shape
The code snippet below shows how to delete a shape. <br/>
Note: deleting a shape deletes all the edges associated with the shape.

Python:
```python
  BwApi.ShapeDelete(garmentId, shapeId)
```
C++:
```cpp
  BwApiShapeDelest(garmentId, shapeId);
```
C#:
```csharp
  BwApi.ShapeDelete(garmentId, shapeId);
```
<br/>

<a name="custom-user-data"></a>
## Custom user data
Sometimes it is useful to add some custom data to be attached to the shape. This data is saved along with the shape <br/>
Note: there is no representation for this data.

Python:
```python
  # store an external shape id as buffer
  strIn = 'SID:123456'
  bufferIn = list(str)
  BwApi.ShapeUserDataSet(garmentId, shapeId, 'com.companyname.pluginname', 'shape_external_id', bufferIn)

  # get the buffer previously stored
  bufferOut = BwApi.ShapeUserDataGet(garmentId, shapeId, 'com.companyname.pluginname', 'shape_external_id')
```
C++:
```cpp
  // store an external shape id as buffer
  BwBuffer bufferIn;
  std::string strIn = "SID:123456";
  bufferIn.set(&strIn.front(), (unsigned int) strIn.size());
  BwApiShapeUserDataSet(garmentId, shapeId, "com.companyname.pluginname", "shape_external_id", bufferIn);

  // get the buffer previously stored
  BwBuffer bufferOut;
  BwApiShapeUserDataGet(garmentId, shapeId, "com.companyname.pluginname", "shape_external_id", bufferOut);
```
C#:
```csharp
  // store an external shape id as buffer
  BwApiBuffer bufferIn = new BwApiBuffer();
  string strIn = "SID:123456";
  bufferIn.Add('a');
  BwApi.ShapeUserDataSet(garmentId, shapeId, "com.companyname.pluginname", "shape_external_id", bufferIn);

  // get the buffer previously stored
  BwApiBuffer bufferOut = new BwApiBuffer();
  BwApi.ShapeUserDataGet(garmentId, shapeId, "com.companyname.pluginname", "shape_external_id", bufferOut);
```
<br/>

<a name="custom-user-data-string"></a>
## Custom user data string
Sometimes it is useful to add some custom data to be attached to the shape in string format. This data is saved along with the garment <br/>

Python:
```python
  # store an external shape id as string
  BwApi.ShapeUserDataStrSet(garmentId, shapeId, 'shape_external_id', 'SID:123456')

  # get the string previously stored
  resString = BwApi.ShapeUserDataStrGet(garmentId, shapeId, 'shape_external_id')
```
C++:
```cpp
  // store an external shape id as string
  const char* strIn = "SID:123456";
  BwApiShapeUserDataStrSet(garmentId, shapeId, "shape_external_id", strIn);

  // get the string previously stored
  BwString strOut;
  BwApiShapeUserDataStrGet(garmentId, shapeId, "shape_external_id", &strOut);
```
C#:
```csharp
  // store an external garment id as string
  BwApi.ShapeUserDataStrSet(garmentId, shapeId, "shape_external_id", "SID:123456");

  // get the string previously stored
  string strOut;
  BwApi.ShapeUserDataStrGet(garmentId, shapeId, "shape_external_id", out strOut);
```
<br/>
