---
id: Get-avatar-measurement
title: Get avatar measurement
---

## Getting avatar measurements
The code snippet below shows how to get the measurements of the current avatar in VStitcher/Lotta. The avatar measurement get function returns a JSON file (as a string) that contains all the avatar's measurement information. This JSON object is validated to the avatar measurements schema.
<br/>
Example of avatar properties in JSON format:
```{.json}
{
	"Body Shaping": {
		"apex_distance": 0.0,
		"apex_height": 0.0,
		"arm-hole_fix": 0.0,
		"back_shape": 0.0,
		...
	},
	"Body Silhouette": {
		"bsize": 89.23741149902344,
		"maternity": 0.0,
		...
	},
	"Face": {
		"angle_eyes": 0.0,
		"cheek": 0.0,
		"chinwidth": 0.0,
		"distance_eyes": 0.0,
		...
	},
	...
}
```
Python:
```  python
  avatar_measurements = BwApi.AvatarMeasurementsGet()
```
C++:
```  cpp
  BwApiString* avatarMeasurement = BwApiStringCreate();
  BwApiAvatarMeasurementsGet(avatarMeasurement);
```
C#:
```  csharp
  string avatarMeasurement;
  BwApi.AvatarMeasurementsGet(out avatarMeasurement);
```
<br/>


## Updating avatar measurements
The code snippet below shows how to update the measurements of the current avatar in VStitcher/Lotta. The avatar measurement set function receives a JSON file (as a string) that contains all the avatar's measurement information. The JSON file must be validated against the avatar measurement schema.
<br/>
Python:
```  python
  # assuming avatar_measurements is a valid avatar measurements object
  BwApi.AvatarMeasurementsUpdate(avatar_measurements)
```
C++:
```  cpp
  // assuming avatarProperties is a valid avatar measurements object
  BwApiAvatarMeasurementsUpdate(avatarProperties);
```
C#:
```  csharp
  // assuming avatarProperties is a valid avatar measurements object
  BwApi.AvatarMeasurementsUpdate(out avatarProperties);
```
<br/>