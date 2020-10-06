---
id: Create-Shape
title: Create Shape
---

The code snippet below shows how to create a new shape. <br/>
After the shape creation, there will be no representation of this shape in the system until you add edges to this shape. For more information, refer to [Create Edge](Create-Edge.md).

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