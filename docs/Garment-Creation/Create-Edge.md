---
id: Create-Edge
title: Create Edge
---

The code snippet below shows how to add an edge to an existing shape.

Python:
```python
  # edge starting point
  pointStart = BwApi.Point()
  pointStart.x = 0
  pointStart.y = 0
  # sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
  pointStart.type = BwApi.BW_API_POINT_TYPE_SHARP
  # not graded
  pointStart.gradeId = -1

  # edge ending point
  pointEnd = BwApi.Point()
  pointEnd.x = 10
  pointEnd.y = 0
  # sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
  pointEnd.type = BwApi.BW_API_POINT_TYPE_SHARP
  # not graded
  pointEnd.gradeId = -1  

  # create list with all edge points
  edgePoints = []
  edgePoints.append(pointStart)
  edgePoints.append(pointEnd)

  # create a new edge, we are passing -1 to the beforeEdgeId param to insert the edge at the end.
  edgeId = BwApi.EdgeCreate(garmentId, shapeId, -1, edgePoints)
```
C++:
```cpp
  BwIntVector edgePoints;
  // edge starting point
  // define non graded (-1) sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
  edgePoints.add({0, 0, BwApi.BW_API_POINT_TYPE_SHARP, -1});
  // edge ending point
  // define non graded (-1) sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
  edgePoints.add({10, 0, BwApi.BW_API_POINT_TYPE_SHARP, -1});

  # create a new edge, we are passing -1 to the beforeEdgeId param to insert the edge at the end.
  int edgeId = 0;
  BwApi.EdgeCreate(garmentId, shapeId, -1, edgePoints, &edgeId);
```
C#:
```csharp
  // edge starting point
  pointStart = new Point();
  pointStart.x = 0;
  pointStart.y = 0;
  // sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
  pointStart.type = PointType.BW_API_POINT_TYPE_SHARP;
  // not graded
  pointStart.gradeId = -1;

  // edge ending point
  pointEnd = new Point();
  pointEnd.x = 10;
  pointEnd.y = 0;
  // sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
  pointEnd.type = PointType.BW_API_POINT_TYPE_SHARP;
  // not graded
  pointEnd.gradeId = -1;

  // create list with all edge points
  BwApiVectorPoint edgePoints = new BwApiVectorPoint();
  edgePoints.Add(pointStart)
  edgePoints.Add(pointEnd)

  // create a new edge, we are passing -1 to the beforeEdgeId param to insert the edge at the end.
  BwApi.EdgeCreate(garmentId, shapeId, -1, edgePoints, out edgeId)
```
<br/>