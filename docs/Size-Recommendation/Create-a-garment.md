---
id: Create-a-garment
title: Create a garment
---

## Creating a Garment
The code snippet below shows how to create a new garment. <br/>
Note: If there is currently an open garment, the app asks the user whether to save the existing garment or to cancel the new garment operation.

Python:
```python
  garmentId = BwApi.GarmentCreate('Garment Name')
```
C++:
```cpp
  BwString garmentId;
  BwApiGarmentCreate('Garment Name', garmentId);
  std::string garmendIdStr = garmentId.c_str(); // garment id as string
```
C#:
```csharp
  string garmentId;
  BwApi.GarmentCreate('Garment Name', out garmentId);
```
<br/>