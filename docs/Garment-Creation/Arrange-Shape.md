---
id: Arrange-Shape
title: Arrange Shape
---

Clusters are the way pattern pieces are located on the avatar. <br/>
This document provides you with basic cluster functionality - You can create a cluster, add shapes to a cluster, remove a cluster, and so on.

For full documentation, refer to 'BWPluginAPI_Cluster.h' in the plugin pack.

## Creating a cluster
The code snippet below shows how to create a cluster.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # Create new cluster (Front Torso)
  clusterId = BwApi.ClusterCreate(garmentId,
                                  BwApi.BW_API_CLUSTER_SILHOUETTE_VIEW_FRONT,
                                  BwApi.BW_API_CLUSTER_SILHOUETTE_LOCATION_TORSO)
```
<!--C++-->

```cpp
  // Create new cluster (Front Torso)
  int clusterId = 0;
  BwApiClusterCreate(garmentId,
                   BW_API_CLUSTER_SILHOUETTE_VIEW_FRONT,
                   BW_API_CLUSTER_SILHOUETTE_LOCATION_TORSO,
                   &clusterId);
```
<!--C#-->

```csharp
  // Create new cluster (Front Torso)
  int clusterId = 0;
  BwApi.ClusterCreate(garmentId,
  								 ClusterSilhouetteView.BW_API_CLUSTER_SILHOUETTE_VIEW_FRONT,
  								 ClusterSilhouetteLocation.BW_API_CLUSTER_SILHOUETTE_LOCATION_TORSO,
  								 &clusterId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Adding shape to a cluster
Creating a cluster without any shape doesn't do anything. <br/>
The code snippet below shows how to add an existing shape to an existing cluster. A cluster may have more than one shape associated with it.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # Add existing shape to an existing cluster
  BwApi.ClusterShapeAdd(garmentId, clusterId, shapeId)
```
<!--C++-->

```cpp
  // Add existing shape to an existing cluster
  result = BwApiClusterShapeAdd(garmentId,
		                            clusterId,
			                          shapeId);
```
<!--C#-->

```csharp
  // Add existing shape to an existing cluster
  BwApi.ClusterShapeAdd(garmentId,
  						          clusterId,
  						          shapeId);

```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Setting shape offset on a cluster
The code snippet below shows how to set the shape offset from the cluster hanging point.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # Get the current shape offset
  offset = BwApi.ClusterShapeOffsetGet(garmentId, clusterId, shapeId)

  # Move the shape a little bit
  offset.x = offset.x + 5
  offset.y = offset.y + 2

  # Update the shape offset
  BwApi.ClusterShapeOffsetSet(garmentId, clusterId, shapeId, offset)
```
<!--C++-->

```cpp
  // Get the current shape offset
  BwApiCoodinatesXY offset;
  BwApiClusterShapeOffsetGet(garmentId, clusterId, shapeId, &offset);

  // Move the shape a little bit
  offset.x = offset.x + 5;
  offset.y = offset.y + 2;

  // Update the shape offset
  BwApiClusterShapeOffsetSet(garmentId, clusterId, shapeId, offset);
```
<!--C#-->

```csharp
  // Get the current shape offset
  CoordinatesXY offset = new CoordinatesXY();
  BwApi.ClusterShapeOffsetGet(garmentId, clusterId, shapeId, out offset);

  // Move the shape a little bit
  offset.x = offset.x + 5;
  offset.y = offset.y + 2;

  // Update the shape offset
  BwApi.ClusterShapeOffsetSet(garmentId, clusterId, shapeId, offset);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Removing a shape from a cluster
The code snippet below shows how to remove a shape from a cluster.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # remove the shape from the cluster
  BwApi.ClusterShapeRemove(garmentId, clusterId, shapeId)
```
<!--C++-->

```cpp
  // remove the shape from the cluster
  BwApiClusterShapeRemove(garmentId, clusterId, shapeId);
```
<!--C#-->

```csharp
  // remove the shape from the cluster
  BwApi.ClusterShapeRemove(garmentId, clusterId, shapeId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Deleting a cluster
The code snippet below shows how to remove a cluster. Shapes associated with the cluster have no cluster after this action completes.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # delete a cluster
  BwApi.ClusterDelete(garmentId, clusterId)
```
<!--C++-->

```cpp
  // delete a cluster
  BwApiClusterDelete(garmentId, clusterId);
```
<!--C#-->

```csharp
  // delete a cluster
  BwApi.ClusterDelete(garmentId, clusterId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>
