---
id: Avatars
title: Avatars
---
This document provides you with basic avatar functionality. You can get the current avatar, set the current avatar, get the list of all the avatars in VStitcher/Lotta, and so on.

For full documentation, refer to 'BWPluginAPI_Avatar.h' in the plugin pack. </br>
For more information about Avatars, visit <a href="https://support.browzwear.com/VStitcher/Avatars/avatars.htm" target="_blank">here</a>

## Getting template avatars
The code snippet below shows how to get all the template avatars in VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  avatar_templates = BwApi.AvatarTemplates()
```
<!--C++-->
```  cpp
  BwApiVectorString* avatarTemplates = BwApiVectorStringCreate();
  BwApiAvatarTemplates(avatarTemplates);
```
<!--C#-->
```  csharp
  BwApiVectorString templates = new BwApiVectorString();
  BwApi.AvatarTemplates(templates);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Getting avatar ids
The code snippet below shows how to get the avatar ids in VStitcher/Lotta.

If avatarParametric is equal to 1, it means that we get all the parametric avatar ids, otherwise we get all the imported avatar ids.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  avatar_ids = BwApi.AvatarIds(0)
```
<!--C++-->
```  cpp
  BwApiVectorString* avatarIds = BwApiVectorStringCreate();
  BwApiAvatarIds(0, avatarIds);
```
<!--C#-->
```  csharp
  BwApiVectorString avatarIds = new BwApiVectorString();
  BwApi.AvatarIds(0, avatarIds);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Deleting an avatar
The code snippet below shows how to delete an avatar from VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  avatar_ids = BwApi.AvatarIds(0)
  BwApi.AvatarDelete(avatar_ids [0])
```
<!--C++-->
```  cpp
  BwApiVectorString* avatarIds = BwApiVectorStringCreate();
  BwApiAvatarIds(0, avatarIds);
  BwApiAvatarDelete(BwApiVectorStringItem(avatarIds, 0));
```
<!--C#-->
```  csharp
  BwApiVectorString avatarIds = new BwApiVectorString();
  BwApi.AvatarIds(0, avatarIds);
  BwApi.AvatarDelete(avatarIds[0]);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting current avatar 
The code snippet below shows how to get the current avatar id from VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  current_avatar_id = BwApi.AvatarCurrentGet()
```
<!--C++-->
```  cpp
  BwApiString* avatarId = BwApiStringCerate();
  BwApiAvatarCurrentGet(avatarId);
```
<!--C#-->
```  csharp
  string avatarId;
  BwApi.AvatarCurrentGet(out avatarId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Setting current avatar
The code snippet below shows how to set the current avatar id in VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  # assuming avatarId is a valid avatar id in the system
  BwApi.AvatarCurrentSet(avatarId)
```
<!--C++-->
```  cpp
  // assuming avatarId is a valid avatar id in the system
  BwApiAvatarCurrentSet(avatarId);
```
<!--C#-->
```  csharp
  // assuming avatarId is a valid avatar id in the system
  BwApi.AvatarCurrentSet(avatarId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Importing an avatar
The code snippet below shows how to import an avatar to VStitcher/Lotta.

Note: the avatar file must be FBX, OBJ, or AVA.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  # assuming the path is valid and the file format is valid
  avatarId = BwApi.AvatarImport(path)
```
<!--C++-->
```  cpp
  // assuming the path is valid and the file format is valid
  BwApiString* avatarId = BwApiStringCreate();
  BwApiAvatarImport(path, avatarId);
```
<!--C#-->
```  csharp
  string avatarId;
  BwApi.AvatarImport(path, out avatarId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Importing a VSA file
The code snippet below shows how to import a VSA file to VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  # assuming the path is valid and the file format is valid
  avatarIds = BwApi.AvatarImportVSA(path)
```
<!--C++-->
```  cpp
  // assuming the path is valid and the file format is valid
  BwApiVectorString* avatarIds = BwApiVectorStringCreate();
  BwApiAvatarImportVSA(path, avatarIds);
```
<!--C#-->
```  csharp
  BwApiVectorString avatarIds = new BwApiVectorString();
  BwApi.AvatarImportVSA(path, out avatarIds);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Getting pose ids of current avatar

The code snippet below shows how to get the pose ids of the current avatar in VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  pose_ids = BwApi.AvatarCurrentPoseIds()
```
<!--C++-->
```  cpp
  BwApiVectorString* poseIds = BwApiVectorStringCreate();
  BwApiAvatarCurrentPoseIds(poseIds);
```
<!--C#-->
```  csharp
  BwApiVectorString poseIds = new BwApiVectorString();
  BwApi.AvatarCurrentPoseIds(poseIds);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting avatar's current pose
The code snippet below shows how to get the pose id of the current avatar in VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  pose_id = BwApi.AvatarPoseCurrentGet()
```
<!--C++-->
```  cpp
  BwApiString* poseId = BwApiStringCerate();
  BwApiAvatarPoseCurrentGet(poseId);
```
<!--C#-->
```  csharp
  string poseId;
  BwApi.AvatarPoseCurrentGet(out poseId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Setting avatar's current pose
The code snippet below shows how to set the pose id of the current avatar in VStitcher/Lotta.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  # assuming the poseId is a valid pose on the current avatar
  # set redress to 1 if the avatar is already dressed and when changing pose it keeps the garment on
  # set resimulate to 1 if you want to force recreation of the snapshot
  BwApi.AvatarPoseCurrentSet(poseId, redress, resimulate)
```
<!--C++-->
```  cpp
  // assuming the poseId is a valid pose on the current avatar
  // set redress to 1 if the avatar is already dressed and when changing pose it keeps the garment on
  // set resimulate to 1 if you want to force recreation of the snapshot
  BwApiAvatarPoseCurrentSet(poseId, 0, 0)
```
<!--C#-->
```  csharp
  // assuming the poseId is a valid pose on the current avatar
  // set redress to 1 if the avatar is already dressed and when changing pose it keeps the garment on
  // set resimulate to 1 if you want to force recreation of the snapshot
  BwApi.AvatarPoseCurrentSet(poseId, 0 , 0)
```
<!--END_DOCUSAURUS_CODE_TABS-->


<br/>

## Getting avatar properties
The code snippet below shows how to get the properties of the current avatar in VStitcher/Lotta. The avatar properties get function returns a JSON file (as a string) that contains all the avatar's properties information. For more information, refer to: app installation folder\Resources\schema\v1\avatar_properties.json.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```  python
  
  avatar_properties = BwApi.AvatarPropertiesGet()
```
<!--C++-->
```  cpp
  BwApiString* avatarProperties = BwApiStringCerate();
  BwApiAvatarPropertiesGet(avatarProperties);
```
<!--C#-->
```  csharp
  string avatarProperties;
  BwApi.AvatarPropertiesGet(out avatarProperties);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Updating avatar properties
The code snippet below shows how to update the properties of the current avatar in VStitcher/Lotta. The avatar properties set function receives a JSON file (as a string) that contains all the avatar's properties information. For more information, refer to: app installation folder\Resources\schema\v1\avatar_properties.json.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```  python
  # assuming avatar_properties is a valid avatar properties object
  BwApi.AvatarPropertiesUpdate(avatar_properties)
```
<!--C++-->

```  cpp
  // assuming avatarProperties is a valid avatar properties object
  BwApiAvatarPropertiesUpdate(avatarProperties);
```
<!--C#-->

```  csharp
  // assuming avatarProperties is a valid avatar properties object
  BwApi.AvatarPropertiesUpdate(out avatarProperties);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Getting avatar's measurement schema
The code snippet below shows how to get the measurement schema of the current avatar in VStitcher/Lotta. The avatar measurement schema function returns a JSON file (as a string) that contains all the avatar's measurement schema information. 
Note: For every parametric avatar there is a different schema.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```  python
  avatar_measurement_schema = BwApi.AvatarMeasurementsSchema()
```
<!--C++-->

```  cpp
  BwApiString* avatarMeasurementSchama = BwApiStringCreate();
  BwApiAvatarPropertiesGet(avatarMeasurementSchama);
```
<!--C#-->

```  csharp
  string avatarMeasurementSchama;
  BwApi.AvatarPropertiesGet(out avatarMeasurementSchama);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>
