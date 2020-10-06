---
id: Initialize
title: Initialize
---
<!--DOCUSAURUS_CODE_TABS-->
As described in the plugin creation step, every plugin must implement and export an initialize function (BwApiPluginInit), returning 1 for a successful initialization.

<!--Python-->

```python
import BwApi

def BwApiPluginInit():
  # do initialization here...

  # Return 1 for successful initialization
  return 1
}
```

<!--C++-->

```cpp
#include "BWPluginAPI_v3.h"

int BW_PLUGIN_EXPORT BwApiPluginInit()
{
  // do initialization here...

  // Return 1 for successful initialization
  return 1;
}
```

<!--C#-->

```csharp
using BwPluginApi;

// every plugin needs to have this entry class with Init function in global namespace
class BwApiPlugin
{
    public static int Init(string args /*= Empty String!!! */)
    {
      // do initialization here...

      // Return 1 for successful initialization
      return 1;
    }
}
```

<br/>
<!--END_DOCUSAURUS_CODE_TABS-->