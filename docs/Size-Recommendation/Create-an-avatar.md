---
id: Create-an-avatar
title: Create an avatar
---


<a name="avatar-create"></a>
## Creating an avatar
The code snippet below shows how to create an avatar from a template.
<br/>
Python:
```  python
  BwApi.AvatarCreate(BwApi.AvatarTemplates()[0], "Avatar 1")
```
C++:
```  cpp
  BwApiVectorString* avatarTemplates = BwApiVectorStringCreate();
  BwApiAvatarTemplates(avatarTemplates);
  const char* firstAvatarTemplate = BwApiVectorStringItem(avatarTemplates, 0);
  BwApiString* avatarId = BwApiStringCreate();
  BwApiAvatarCreate(firstAvatarTemplate, "Avatar 1", avatarId);
```
C#:
```  csharp
  BwApiVectorString templates = new BwApiVectorString();
  BwApi.AvatarTemplates(templates);
  string avatarId;
  BwApi.AvatarCreate(templates[0], "Avatar 1", out avatarId);
```
<br/>