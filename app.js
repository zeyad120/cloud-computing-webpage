// Quiz Database
const quizDatabase = {
    "cloud-computing": {
        title: "Introduction to Cloud Computing – Full Coverage MCQ Quiz",
        questions: [
            {
                question: "According to NIST, Cloud Computing provides:",
                options: [
                    "Local resource access only",
                    "On-demand network access to shared resources",
                    "Offline computing",
                    "Dedicated hardware only"
                ],
                correctAnswer: 1,
                explanation: "According to NIST, Cloud Computing provides on-demand network access to shared computing resources."
            },
            {
                question: "Which of the following is NOT mentioned as a cloud resource in the NIST definition?",
                options: [
                    "Networks",
                    "Servers",
                    "Storage",
                    "Microcontrollers"
                ],
                correctAnswer: 3,
                explanation: "Microcontrollers are NOT mentioned as a cloud resource in the NIST definition."
            },
            {
                question: "Cloud resources can be rapidly:",
                options: [
                    "Sold",
                    "Purchased",
                    "Provisioned and released",
                    "Deleted permanently"
                ],
                correctAnswer: 2,
                explanation: "Cloud resources can be rapidly provisioned and released with minimal management effort."
            },
            {
                question: "Cloud Computing requires:",
                options: [
                    "High management effort",
                    "Minimal management effort",
                    "No network",
                    "Dedicated administrators"
                ],
                correctAnswer: 1,
                explanation: "Cloud Computing requires minimal management effort or service provider interaction."
            },
            {
                question: "How many essential characteristics are defined by NIST?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correctAnswer: 2,
                explanation: "NIST defines 5 essential characteristics of Cloud Computing."
            },
            {
                question: "Which characteristic allows users to obtain resources automatically when needed?",
                options: [
                    "Resource Pooling",
                    "Measured Service",
                    "On-Demand Self-Service",
                    "Broad Network Access"
                ],
                correctAnswer: 2,
                explanation: "On-Demand Self-Service allows users to obtain resources automatically when needed."
            },
            {
                question: "Which characteristic enables access through various networked devices?",
                options: [
                    "Resource Pooling",
                    "Broad Network Access",
                    "Rapid Elasticity",
                    "Measured Service"
                ],
                correctAnswer: 1,
                explanation: "Broad Network Access enables access through various networked devices."
            },
            {
                question: "Resource Pooling means:",
                options: [
                    "Resources are dedicated to one user",
                    "Resources are shared among multiple users",
                    "Resources are stored locally",
                    "Resources are manually allocated"
                ],
                correctAnswer: 1,
                explanation: "Resource Pooling means resources are shared among multiple users using a multi-tenant model."
            },
            {
                question: "Rapid Elasticity refers to:",
                options: [
                    "Data encryption",
                    "Fast resource scaling",
                    "Network security",
                    "Resource monitoring"
                ],
                correctAnswer: 1,
                explanation: "Rapid Elasticity refers to fast resource scaling capabilities."
            },
            {
                question: "Measured Service means:",
                options: [
                    "Services are manually tracked",
                    "Resource usage can be monitored and measured",
                    "Resources cannot be monitored",
                    "Users must report usage"
                ],
                correctAnswer: 1,
                explanation: "Measured Service means resource usage can be monitored and measured."
            },
            {
                question: "Which is NOT a cloud service model?",
                options: [
                    "SaaS",
                    "PaaS",
                    "IaaS",
                    "DAS"
                ],
                correctAnswer: 3,
                explanation: "DAS is NOT a cloud service model. The standard models are SaaS, PaaS, and IaaS."
            },
            {
                question: "SaaS stands for:",
                options: [
                    "Software as a Service",
                    "Storage as a Service",
                    "Security as a Service",
                    "Server as a Service"
                ],
                correctAnswer: 0,
                explanation: "SaaS stands for Software as a Service."
            },
            {
                question: "PaaS stands for:",
                options: [
                    "Public as a Service",
                    "Platform as a Service",
                    "Processing as a Service",
                    "Program as a Service"
                ],
                correctAnswer: 1,
                explanation: "PaaS stands for Platform as a Service."
            },
            {
                question: "IaaS stands for:",
                options: [
                    "Infrastructure as a Service",
                    "Internet as a Service",
                    "Information as a Service",
                    "Integration as a Service"
                ],
                correctAnswer: 0,
                explanation: "IaaS stands for Infrastructure as a Service."
            },
            {
                question: "Which deployment model is accessible to the general public?",
                options: [
                    "Private",
                    "Community",
                    "Public",
                    "Hybrid"
                ],
                correctAnswer: 2,
                explanation: "Public Cloud is accessible to the general public."
            },
            {
                question: "Which deployment model is owned by a single organization?",
                options: [
                    "Public",
                    "Community",
                    "Hybrid",
                    "Private"
                ],
                correctAnswer: 3,
                explanation: "Private Cloud is owned by a single organization."
            },
            {
                question: "A Hybrid Cloud combines:",
                options: [
                    "Public and Private clouds",
                    "SaaS and PaaS",
                    "LAN and WAN",
                    "Grid and Cluster"
                ],
                correctAnswer: 0,
                explanation: "A Hybrid Cloud combines Public and Private clouds."
            },
            {
                question: "Cloud Computing is generally:",
                options: [
                    "More expensive than traditional systems",
                    "Less expensive than similar traditional solutions",
                    "Equal in cost",
                    "Impossible to measure"
                ],
                correctAnswer: 1,
                explanation: "Cloud Computing is generally less expensive than similar traditional solutions."
            },
            {
                question: "Cloud Computing mainly supports:",
                options: [
                    "Fixed-demand computing",
                    "On-demand computing",
                    "Offline computing",
                    "Manual computing"
                ],
                correctAnswer: 1,
                explanation: "Cloud Computing mainly supports on-demand computing."
            },
            {
                question: "One major advantage of Cloud Computing is:",
                options: [
                    "Reduced scalability",
                    "Scalability without high IT overhead",
                    "No networking support",
                    "No resource sharing"
                ],
                correctAnswer: 1,
                explanation: "One major advantage of Cloud Computing is scalability without high IT overhead."
            },
            {
                question: "Which of the following can be offered as a cloud service?",
                options: [
                    "Desktop",
                    "Database",
                    "Networking",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "Desktop, Database, and Networking can all be offered as cloud services."
            },
            {
                question: "Network-Centric Computing relies on:",
                options: [
                    "Local computers only",
                    "Remote computing resources over the Internet",
                    "Standalone machines",
                    "Offline storage"
                ],
                correctAnswer: 1,
                explanation: "Network-Centric Computing relies on remote computing resources over the Internet."
            },
            {
                question: "Grid Computing emerged mainly in:",
                options: [
                    "1980s",
                    "Early 1990s",
                    "2005",
                    "2015"
                ],
                correctAnswer: 1,
                explanation: "Grid Computing emerged mainly in the early 1990s."
            },
            {
                question: "Cloud Computing became popular around:",
                options: [
                    "1990",
                    "1995",
                    "2005–2006",
                    "2015"
                ],
                correctAnswer: 2,
                explanation: "Cloud Computing became popular around 2005–2006."
            },
            {
                question: "Grid Computing primarily targeted:",
                options: [
                    "Enterprise Computing",
                    "Scientific Computing",
                    "Mobile Computing",
                    "Personal Computing"
                ],
                correctAnswer: 1,
                explanation: "Grid Computing primarily targeted Scientific Computing."
            },
            {
                question: "Cloud Computing primarily targeted:",
                options: [
                    "Enterprise Computing",
                    "Scientific Computing",
                    "Embedded Systems",
                    "Mobile Networks"
                ],
                correctAnswer: 0,
                explanation: "Cloud Computing primarily targeted Enterprise Computing."
            },
            {
                question: "A major difference between Grid and Cloud Computing is:",
                options: [
                    "Grid users access resources directly",
                    "Cloud users access resources directly",
                    "Grid has no resource sharing",
                    "Cloud has no resource sharing"
                ],
                correctAnswer: 0,
                explanation: "A major difference is that Grid users access resources directly."
            },
            {
                question: "Which of the following is a Cloud Computing challenge?",
                options: [
                    "Data Confidentiality",
                    "Service Availability",
                    "Data Transfer Bottleneck",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "Data Confidentiality, Service Availability, and Data Transfer Bottleneck are all Cloud Computing challenges."
            },
            {
                question: "Performance unpredictability in cloud systems is often caused by:",
                options: [
                    "Resource sharing",
                    "Lack of storage",
                    "No networking",
                    "No virtualization"
                ],
                correctAnswer: 0,
                explanation: "Performance unpredictability in cloud systems is often caused by resource sharing."
            },
            {
                question: "Cloud Computing is built upon:",
                options: [
                    "Distributed System Architecture",
                    "Compiler Design",
                    "Data Structures",
                    "Operating Systems only"
                ],
                correctAnswer: 0,
                explanation: "Cloud Computing is built upon Distributed System Architecture."
            }
        ]
    },
    "distributed-systems": {
        title: "Distributed Systems – Full Coverage MCQ Quiz",
        questions: [
            {
                question: "A distributed system is:",
                options: [
                    "A single powerful computer",
                    "A collection of autonomous computing elements appearing as one system",
                    "A local database",
                    "A network cable"
                ],
                correctAnswer: 1,
                explanation: "A distributed system is a collection of autonomous computing elements that appear to users as a single coherent system."
            },
            {
                question: "Autonomous computing elements are called:",
                options: [
                    "Threads",
                    "Kernels",
                    "Nodes",
                    "Routers"
                ],
                correctAnswer: 2,
                explanation: "Nodes are the autonomous computing elements in a distributed system that work together."
            },
            {
                question: "Nodes in a distributed system may be:",
                options: [
                    "Hardware devices only",
                    "Software processes only",
                    "Hardware devices and software processes",
                    "Databases only"
                ],
                correctAnswer: 2,
                explanation: "Nodes can be both hardware devices (like computers) and software processes running on those devices."
            },
            {
                question: "Users perceive a distributed system as:",
                options: [
                    "Multiple separate systems",
                    "A single coherent system",
                    "Independent servers",
                    "Multiple databases"
                ],
                correctAnswer: 1,
                explanation: "A key goal of distributed systems is to appear as a single coherent system to users, hiding the complexity."
            },
            {
                question: "AS stands for:",
                options: [
                    "Access Service",
                    "Autonomous System",
                    "Application Server",
                    "Administrative Service"
                ],
                correctAnswer: 1,
                explanation: "AS stands for Autonomous System, which is a collection of connected IP routing prefixes under the control of one or more network operators."
            },
            {
                question: "An Autonomous System is managed by:",
                options: [
                    "Multiple unrelated organizations",
                    "A single administrative entity",
                    "End users only",
                    "No one"
                ],
                correctAnswer: 1,
                explanation: "An Autonomous System is managed by a single administrative entity that has a unified routing policy."
            },
            {
                question: "Which is an example of an Autonomous System owner?",
                options: [
                    "University",
                    "ISP",
                    "Government",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "Universities, ISPs (Internet Service Providers), and governments can all own and manage Autonomous Systems."
            },
            {
                question: "Autonomous behavior means:",
                options: [
                    "Dependent behavior",
                    "Independent behavior",
                    "Shared behavior",
                    "Controlled behavior"
                ],
                correctAnswer: 1,
                explanation: "Autonomous behavior means nodes operate independently with their own local control and decision-making capabilities."
            },
            {
                question: "Distributed systems generally have:",
                options: [
                    "One global clock",
                    "Multiple global clocks",
                    "No global clock notion",
                    "GPS clock only"
                ],
                correctAnswer: 2,
                explanation: "Distributed systems generally have no global clock notion, which creates synchronization challenges."
            },
            {
                question: "Lack of a global clock creates:",
                options: [
                    "Scalability issues",
                    "Synchronization issues",
                    "Security issues",
                    "Storage issues"
                ],
                correctAnswer: 1,
                explanation: "Without a global clock, coordinating events and maintaining consistency across nodes becomes difficult."
            },
            {
                question: "An Overlay Network is built:",
                options: [
                    "Under the Internet",
                    "On top of another network",
                    "Without a network",
                    "Inside an OS"
                ],
                correctAnswer: 1,
                explanation: "An Overlay Network is built on top of another network, using virtual links between nodes."
            },
            {
                question: "A common example of an Overlay Network is:",
                options: [
                    "FTP",
                    "DNS",
                    "P2P Systems",
                    "HTTP"
                ],
                correctAnswer: 2,
                explanation: "Peer-to-Peer (P2P) systems are common examples of overlay networks built on top of the Internet."
            },
            {
                question: "Overlay networks add:",
                options: [
                    "Extra hardware",
                    "Virtualization/indirection layer",
                    "More CPUs",
                    "More storage"
                ],
                correctAnswer: 1,
                explanation: "Overlay networks add a virtualization or indirection layer that abstracts the underlying physical network."
            },
            {
                question: "A coherent distributed system operates:",
                options: [
                    "Differently at each node",
                    "The same regardless of location",
                    "Only locally",
                    "Only remotely"
                ],
                correctAnswer: 1,
                explanation: "A coherent distributed system operates the same regardless of where the user is located or which node they access."
            },
            {
                question: "Users should not know:",
                options: [
                    "Which OS is used",
                    "Where computation takes place",
                    "Network speed",
                    "CPU model"
                ],
                correctAnswer: 1,
                explanation: "Users should not know where computation takes place - this is part of distributed transparency."
            },
            {
                question: "Hiding data location from users is called:",
                options: [
                    "Replication",
                    "Transparency",
                    "Scheduling",
                    "Virtualization"
                ],
                correctAnswer: 1,
                explanation: "Transparency is the concept of hiding the complexity and location of resources from users."
            },
            {
                question: "The keyword associated with coherent systems is:",
                options: [
                    "Middleware",
                    "Openness",
                    "Distributed Transparency",
                    "Scalability"
                ],
                correctAnswer: 2,
                explanation: "Distributed Transparency is the keyword associated with coherent systems that hide complexity from users."
            },
            {
                question: "An Operating System is software that:",
                options: [
                    "Replaces hardware",
                    "Uses hardware resources to support software execution",
                    "Builds networks",
                    "Stores databases"
                ],
                correctAnswer: 1,
                explanation: "An Operating System manages hardware resources and provides services to support software execution."
            },
            {
                question: "The core of an operating system is:",
                options: [
                    "Browser",
                    "API",
                    "Kernel",
                    "Desktop"
                ],
                correctAnswer: 2,
                explanation: "The kernel is the core of an operating system that manages hardware and provides essential services."
            },
            {
                question: "In Linux, Bash is a:",
                options: [
                    "Kernel",
                    "Shell",
                    "Middleware",
                    "Database"
                ],
                correctAnswer: 1,
                explanation: "Bash is a shell (command-line interpreter) in Linux that provides an interface to the kernel."
            },
            {
                question: "GNOME and KDE are:",
                options: [
                    "Databases",
                    "Programming languages",
                    "Desktop environments",
                    "Kernels"
                ],
                correctAnswer: 2,
                explanation: "GNOME and KDE are desktop environments that provide graphical user interfaces for Linux systems."
            },
            {
                question: "One function of the OS is:",
                options: [
                    "Managing concurrent computations",
                    "Building hardware",
                    "Creating IP addresses",
                    "Replacing middleware"
                ],
                correctAnswer: 0,
                explanation: "The OS manages concurrent computations through process scheduling and resource allocation."
            },
            {
                question: "Middleware in distributed systems acts like:",
                options: [
                    "Database",
                    "Router",
                    "Operating System",
                    "Firewall"
                ],
                correctAnswer: 2,
                explanation: "Middleware in distributed systems acts like an operating system, providing services and abstractions for distributed applications."
            },
            {
                question: "Middleware provides:",
                options: [
                    "Messaging",
                    "Authentication",
                    "Data Management",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "Middleware provides various services including messaging, authentication, and data management for distributed applications."
            },
            {
                question: "Which is NOT a middleware service?",
                options: [
                    "Reliability",
                    "Communication",
                    "Transaction Management",
                    "CPU Manufacturing"
                ],
                correctAnswer: 3,
                explanation: "CPU Manufacturing is a hardware process, not a middleware service. Middleware provides software-level services."
            },
            {
                question: "One goal of distributed systems is:",
                options: [
                    "Resource Sharing",
                    "Game Development",
                    "Image Processing",
                    "Machine Learning"
                ],
                correctAnswer: 0,
                explanation: "Resource Sharing is a primary goal of distributed systems, allowing users to access remote resources."
            },
            {
                question: "The phrase 'The Network is the Computer' refers to:",
                options: [
                    "Openness",
                    "Resource Sharing",
                    "Security",
                    "Replication"
                ],
                correctAnswer: 1,
                explanation: "The phrase emphasizes that in distributed systems, the network enables sharing of resources across computers."
            },
            {
                question: "Shared mail services are an example of:",
                options: [
                    "Resource Sharing",
                    "Scalability",
                    "Middleware",
                    "Fault Tolerance"
                ],
                correctAnswer: 0,
                explanation: "Shared mail services allow multiple users to access email resources, demonstrating resource sharing."
            },
            {
                question: "Access Transparency means:",
                options: [
                    "Local and remote access appear similar",
                    "Data is encrypted",
                    "Data is replicated",
                    "Systems are scalable"
                ],
                correctAnswer: 0,
                explanation: "Access Transparency means local and remote resources are accessed using the same operations."
            },
            {
                question: "Location Transparency hides:",
                options: [
                    "User identity",
                    "Object location",
                    "Replication",
                    "Failures"
                ],
                correctAnswer: 1,
                explanation: "Location Transparency hides where an object is physically located from users."
            },
            {
                question: "Migration Transparency hides:",
                options: [
                    "User location",
                    "Data/object movement",
                    "Network topology",
                    "Security mechanisms"
                ],
                correctAnswer: 1,
                explanation: "Migration Transparency hides the movement of objects or data from one location to another."
            },
            {
                question: "Which transparency hides data replication?",
                options: [
                    "Access",
                    "Fault",
                    "Replication",
                    "Location"
                ],
                correctAnswer: 2,
                explanation: "Replication Transparency hides the fact that multiple copies of data exist."
            },
            {
                question: "Fault Transparency hides:",
                options: [
                    "Replication",
                    "Failures",
                    "Migration",
                    "Scaling"
                ],
                correctAnswer: 1,
                explanation: "Fault Transparency hides failures and recovery mechanisms from users."
            },
            {
                question: "Openness is associated with the keyword:",
                options: [
                    "Replication",
                    "Interoperability",
                    "Concurrency",
                    "Latency"
                ],
                correctAnswer: 1,
                explanation: "Openness is associated with interoperability - the ability of different systems to work together."
            },
            {
                question: "Open systems should support:",
                options: [
                    "Portability",
                    "Interoperability",
                    "Well-defined interfaces",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "Open systems should support portability, interoperability, and have well-defined interfaces."
            },
            {
                question: "Scalability means:",
                options: [
                    "Increasing storage only",
                    "Growing the system efficiently",
                    "Encrypting data",
                    "Improving security only"
                ],
                correctAnswer: 1,
                explanation: "Scalability means the system can grow efficiently to handle increased load or size."
            },
            {
                question: "Which is a scalability type?",
                options: [
                    "Size Scalability",
                    "Geographical Scalability",
                    "Administrative Scalability",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "The three types of scalability are size, geographical, and administrative scalability."
            },
            {
                question: "Scale Up means:",
                options: [
                    "Adding more powerful resources to a machine",
                    "Adding more machines",
                    "Encrypting data",
                    "Replicating data"
                ],
                correctAnswer: 0,
                explanation: "Scale Up (vertical scaling) means adding more powerful resources to a single machine."
            },
            {
                question: "Scale Out means:",
                options: [
                    "Increasing CPU speed only",
                    "Adding more PCs/servers",
                    "Compressing files",
                    "Reducing users"
                ],
                correctAnswer: 1,
                explanation: "Scale Out (horizontal scaling) means adding more machines to distribute the load."
            },
            {
                question: "Which is a challenge of distributed systems?",
                options: [
                    "Network Latency",
                    "Security",
                    "Heterogeneous Networks",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "Network latency, security, and heterogeneous networks are all challenges in distributed systems."
            }
        ]
    },
    "distributed-systems-2": {
        title: "Distributed Systems",
        questions: [
            {
                question: "What is the primary function of middleware in a distributed system?",
                options: [
                    "Memory management",
                    "Process scheduling",
                    "Enabling coordination and resource sharing among autonomous computers",
                    "Compilation of distributed programs"
                ],
                correctAnswer: 2,
                explanation: "Middleware enables coordination and resource sharing among autonomous computers in a distributed system."
            },
            {
                question: "Which of the following best defines a distributed system?",
                options: [
                    "A single computer with multiple CPUs",
                    "A collection of autonomous computers connected via a network, appearing as a single integrated facility",
                    "A parallel computer with shared memory",
                    "A cluster of computers without any network connection"
                ],
                correctAnswer: 1,
                explanation: "A distributed system is a collection of autonomous computers connected via a network that appears as a single integrated facility to users."
            },
            {
                question: "According to the lecture, users perceive a distributed system as:",
                options: [
                    "Multiple independent systems",
                    "A single integrated computing facility",
                    "A network of separate servers",
                    "A cloud storage service only"
                ],
                correctAnswer: 1,
                explanation: "Users perceive a distributed system as a single integrated computing facility, hiding the complexity of the underlying network."
            },
            {
                question: "What is an example of a distributed system mentioned in the lecture?",
                options: [
                    "Single-threaded application",
                    "Local file system on a laptop",
                    "Distributed file system or network file system",
                    "Batch processing system"
                ],
                correctAnswer: 2,
                explanation: "Distributed file systems or network file systems are examples of distributed systems mentioned in the lecture."
            },
            {
                question: "The performance penalty in distributed file systems is mainly due to:",
                options: [
                    "Faster CPUs",
                    "Larger communication costs",
                    "Increased memory usage",
                    "Reduced disk space"
                ],
                correctAnswer: 1,
                explanation: "The performance penalty in distributed file systems is mainly due to larger communication costs compared to local file access."
            },
            {
                question: "Which chapter of the lecture covers Parallel & Distributed Systems?",
                options: [
                    "Chapter 1",
                    "Chapter 2",
                    "Chapter 3",
                    "Chapter 4"
                ],
                correctAnswer: 1,
                explanation: "Chapter 2 of the lecture covers Parallel & Distributed Systems."
            },
            {
                question: "Bit-level parallelism is related to:",
                options: [
                    "Number of threads",
                    "Word size of the processor",
                    "Number of computers in a network",
                    "Disk access speed"
                ],
                correctAnswer: 1,
                explanation: "Bit-level parallelism is related to the word size of the processor, allowing multiple bits to be processed simultaneously."
            },
            {
                question: "Which operation is more efficient in a pipelined architecture compared to non-pipelined?",
                options: [
                    "Sequential instruction execution",
                    "Overlapping execution of multiple instructions",
                    "Single-cycle operations",
                    "Memory paging"
                ],
                correctAnswer: 1,
                explanation: "Pipelined architecture allows overlapping execution of multiple instructions, making it more efficient than non-pipelined sequential execution."
            },
            {
                question: "Parallel computing architecture primarily focuses on:",
                options: [
                    "Communication over a WAN",
                    "Simultaneous execution of multiple tasks",
                    "Single-threaded performance",
                    "File sharing"
                ],
                correctAnswer: 1,
                explanation: "Parallel computing architecture primarily focuses on the simultaneous execution of multiple tasks to improve performance."
            },
            {
                question: "Which type of computing is mainly for homogeneous platforms and parallel programming?",
                options: [
                    "Grid computing",
                    "Cluster computing",
                    "Cloud computing",
                    "Edge computing"
                ],
                correctAnswer: 1,
                explanation: "Cluster computing is mainly for homogeneous platforms and parallel programming, where similar computers work together."
            },
            {
                question: "Which layer in grid computing provides interfaces to local resources?",
                options: [
                    "Connectivity layer",
                    "Resource layer",
                    "Fabric layer",
                    "Collective layer"
                ],
                correctAnswer: 2,
                explanation: "The Fabric layer in grid computing provides interfaces to local resources."
            },
            {
                question: "In grid computing, which layer handles access to multiple resources, including discovery and allocation?",
                options: [
                    "Fabric",
                    "Connectivity",
                    "Resource",
                    "Collective"
                ],
                correctAnswer: 3,
                explanation: "The Collective layer in grid computing handles access to multiple resources, including discovery and allocation."
            },
            {
                question: "Cluster computing typically uses:",
                options: [
                    "Heterogeneous platforms",
                    "Homogeneous platforms",
                    "Only single-processor machines",
                    "No network connection"
                ],
                correctAnswer: 1,
                explanation: "Cluster computing typically uses homogeneous platforms with similar hardware and software configurations."
            },
            {
                question: "The connectivity layer in grid computing is responsible for:",
                options: [
                    "Managing local resources",
                    "Communication protocols for grid transactions",
                    "User interface",
                    "Data storage"
                ],
                correctAnswer: 1,
                explanation: "The connectivity layer in grid computing is responsible for communication protocols for grid transactions."
            },
            {
                question: "A program in execution is called a:",
                options: [
                    "Thread",
                    "Process",
                    "Kernel",
                    "Shell"
                ],
                correctAnswer: 1,
                explanation: "A program in execution is called a process."
            },
            {
                question: "Which of the following is true about a program?",
                options: [
                    "It is an active entity",
                    "It is stored on disk as an executable file",
                    "It contains both instructions and data in memory",
                    "It is also called a task"
                ],
                correctAnswer: 1,
                explanation: "A program is stored on disk as an executable file and becomes active when loaded into memory as a process."
            },
            {
                question: "The Process Control Block (PCB) does NOT contain:",
                options: [
                    "Process state",
                    "Program counter",
                    "Entire program source code",
                    "CPU scheduling information"
                ],
                correctAnswer: 2,
                explanation: "The PCB does not contain the entire program source code; it contains process state, program counter, and CPU scheduling information."
            },
            {
                question: "Which component of the PCB stores the location of the next instruction to execute?",
                options: [
                    "CPU registers",
                    "Program counter",
                    "Memory limits",
                    "I/O status information"
                ],
                correctAnswer: 1,
                explanation: "The program counter in the PCB stores the location of the next instruction to execute."
            },
            {
                question: "User space and kernel space separation primarily provides:",
                options: [
                    "Faster execution",
                    "Memory protection and hardware protection",
                    "More disk space",
                    "Network security"
                ],
                correctAnswer: 1,
                explanation: "User space and kernel space separation primarily provides memory protection and hardware protection."
            },
            {
                question: "A process becomes active when:",
                options: [
                    "It is compiled",
                    "The executable file is loaded into memory",
                    "It is saved to disk",
                    "It is deleted"
                ],
                correctAnswer: 1,
                explanation: "A process becomes active when the executable file is loaded into memory."
            },
            {
                question: "One program can be several processes. Example given in the lecture:",
                options: [
                    "Multiple users executing the same program",
                    "One user executing one program",
                    "A single-threaded application",
                    "A batch job"
                ],
                correctAnswer: 0,
                explanation: "Multiple users executing the same program is an example where one program can be several processes."
            },
            {
                question: "Which of the following is another name for a process in batch systems?",
                options: [
                    "Thread",
                    "Task",
                    "Job",
                    "Kernel"
                ],
                correctAnswer: 2,
                explanation: "In batch systems, a process is also called a job."
            },
            {
                question: "A thread is described as:",
                options: [
                    "A heavyweight process",
                    "A lightweight program that shares the same address space",
                    "An independent program with its own memory",
                    "A type of process control block"
                ],
                correctAnswer: 1,
                explanation: "A thread is a lightweight program that shares the same address space with other threads in the same process."
            },
            {
                question: "What is a disadvantage of all threads sharing the same address space?",
                options: [
                    "High overhead for creation",
                    "It becomes a bottleneck",
                    "No communication between threads",
                    "Threads cannot run concurrently"
                ],
                correctAnswer: 1,
                explanation: "A disadvantage of all threads sharing the same address space is that it can become a bottleneck due to contention for shared resources."
            },
            {
                question: "Which programming language was designed to write thread-based programs according to the lecture?",
                options: [
                    "C++",
                    "Python",
                    "Java",
                    "Fortran"
                ],
                correctAnswer: 2,
                explanation: "Java was designed to write thread-based programs according to the lecture."
            },
            {
                question: "In a network server, threads are typically used as:",
                options: [
                    "One thread per CPU core",
                    "One thread per connection",
                    "One thread per memory page",
                    "One thread per disk"
                ],
                correctAnswer: 1,
                explanation: "In a network server, threads are typically used as one thread per connection to handle multiple clients concurrently."
            },
            {
                question: "Threads reduce:",
                options: [
                    "Memory usage",
                    "High overhead for creating processes and context switching",
                    "CPU speed",
                    "Network bandwidth"
                ],
                correctAnswer: 1,
                explanation: "Threads reduce the high overhead for creating processes and context switching compared to processes."
            },
            {
                question: "In real-time factory control, threads are used as:",
                options: [
                    "One thread per user",
                    "One thread per client request",
                    "One thread per device",
                    "One thread per file"
                ],
                correctAnswer: 2,
                explanation: "In real-time factory control, threads are used as one thread per device to monitor and control multiple devices."
            },
            {
                question: "RPC stands for:",
                options: [
                    "Remote Program Call",
                    "Remote Procedure Call",
                    "Runtime Procedure Call",
                    "Real-time Process Call"
                ],
                correctAnswer: 1,
                explanation: "RPC stands for Remote Procedure Call."
            },
            {
                question: "Which model does RPC use?",
                options: [
                    "Peer-to-peer",
                    "Client/Server",
                    "Master/Slave",
                    "Publish/Subscribe"
                ],
                correctAnswer: 1,
                explanation: "RPC uses the Client/Server model where a client invokes a procedure on a remote server."
            },
            {
                question: "RPC is a __________ operation.",
                options: [
                    "Asynchronous",
                    "Synchronous",
                    "Non-blocking",
                    "Unreliable"
                ],
                correctAnswer: 1,
                explanation: "RPC is a synchronous operation where the client waits for the server to respond."
            },
            {
                question: "Which RPC semantics resends messages and may execute a request more than once?",
                options: [
                    "At most once",
                    "Exactly once",
                    "At least once",
                    "Zero once"
                ],
                correctAnswer: 2,
                explanation: "At least once semantics resends messages and may execute a request more than once to ensure delivery."
            },
            {
                question: "Which RPC semantics is suitable for operations with side effects?",
                options: [
                    "At least once",
                    "At most once",
                    "Exactly once",
                    "Best effort"
                ],
                correctAnswer: 1,
                explanation: "At most once semantics is suitable for operations with side effects to prevent duplicate execution."
            },
            {
                question: "Which RPC semantics requires acknowledgments from the server?",
                options: [
                    "At least once",
                    "At most once",
                    "Exactly once",
                    "Once and forget"
                ],
                correctAnswer: 2,
                explanation: "Exactly once semantics requires acknowledgments from the server to ensure the operation is executed exactly one time."
            },
            {
                question: "In a layered style, a component at layer L_j can make a downcall to:",
                options: [
                    "Any higher layer",
                    "A lower-level layer L_i (i < j)",
                    "Only the same layer",
                    "A random layer"
                ],
                correctAnswer: 1,
                explanation: "In a layered style, a component at layer L_j can make a downcall to a lower-level layer L_i (i < j)."
            },
            {
                question: "Which is NOT a layer in the traditional three-layered architecture?",
                options: [
                    "Application layer",
                    "Processing layer",
                    "Network layer",
                    "Data layer"
                ],
                correctAnswer: 2,
                explanation: "Network layer is NOT a layer in the traditional three-layered architecture; the layers are Application, Processing, and Data."
            },
            {
                question: "In object-based architecture, components are considered as:",
                options: [
                    "Functions",
                    "Objects",
                    "Threads",
                    "Processes"
                ],
                correctAnswer: 1,
                explanation: "In object-based architecture, components are considered as objects with methods and state."
            },
            {
                question: "In object-based architecture, connection between objects is through:",
                options: [
                    "Shared memory",
                    "RPC (method call)",
                    "Pipes",
                    "Signals"
                ],
                correctAnswer: 1,
                explanation: "In object-based architecture, connection between objects is through RPC (method call)."
            },
            {
                question: "REST stands for:",
                options: [
                    "Remote Execution State Transfer",
                    "Representation State Transfer",
                    "Reliable State Transmission",
                    "Real-time State Transfer"
                ],
                correctAnswer: 1,
                explanation: "REST stands for Representation State Transfer."
            },
            {
                question: "Which operation in RESTful architecture creates a new resource?",
                options: [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                ],
                correctAnswer: 2,
                explanation: "PUT operation in RESTful architecture creates a new resource or updates an existing one."
            },
            {
                question: "Which RESTful operation retrieves the state of a resource?",
                options: [
                    "PUT",
                    "GET",
                    "DELETE",
                    "POST"
                ],
                correctAnswer: 1,
                explanation: "GET operation in RESTful architecture retrieves the state of a resource."
            },
            {
                question: "Stateless execution in REST means:",
                options: [
                    "Server remembers all previous requests",
                    "After executing an operation, the component forgets everything about the caller",
                    "State is stored in the database",
                    "No resources are allowed"
                ],
                correctAnswer: 1,
                explanation: "Stateless execution in REST means after executing an operation, the component forgets everything about the caller."
            },
            {
                question: "An example of a RESTful architecture mentioned in the lecture is:",
                options: [
                    "Google Search",
                    "Amazon S3",
                    "Facebook",
                    "Microsoft Word"
                ],
                correctAnswer: 1,
                explanation: "Amazon S3 is an example of a RESTful architecture mentioned in the lecture."
            },
            {
                question: "The publish-subscribe style is characterized by:",
                options: [
                    "Tight coupling between components",
                    "Strong separation between processing and coordination",
                    "Only synchronous communication",
                    "No communication between components"
                ],
                correctAnswer: 1,
                explanation: "The publish-subscribe style is characterized by strong separation between processing and coordination."
            },
            {
                question: "In the shared data-space architectural style, components are:",
                options: [
                    "Referentially coupled, temporally decoupled",
                    "Temporally coupled, referentially decoupled",
                    "Fully coupled",
                    "Fully decoupled"
                ],
                correctAnswer: 0,
                explanation: "In the shared data-space architectural style, components are referentially coupled but temporally decoupled."
            },
            {
                question: "In Problem 2, how many threads are there in the system?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctAnswer: 2,
                explanation: "In Problem 2, there are 4 threads in the system (t1, t2, t3, t4)."
            },
            {
                question: "In Problem 2, the only communication event in thread t1 is to send a message to which thread?",
                options: [
                    "t2",
                    "t3",
                    "t4",
                    "t1 itself"
                ],
                correctAnswer: 2,
                explanation: "In Problem 2, the only communication event in thread t1 is to send a message to t4."
            },
            {
                question: "In Problem 2, the only communication event in thread t3 is to send a message to which thread?",
                options: [
                    "t1",
                    "t2",
                    "t4",
                    "t3 itself"
                ],
                correctAnswer: 1,
                explanation: "In Problem 2, the only communication event in thread t3 is to send a message to t2."
            },
            {
                question: "According to Problem 6, the publish/subscribe paradigm is applied to services such as:",
                options: [
                    "File systems only",
                    "Bulletin boards and mailing lists",
                    "CPU scheduling",
                    "Memory management"
                ],
                correctAnswer: 1,
                explanation: "According to Problem 6, the publish/subscribe paradigm is applied to services such as bulletin boards and mailing lists."
            },
            {
                question: "According to Problem 6, which cloud service can emulate an event service?",
                options: [
                    "Amazon EC2",
                    "A file server",
                    "A print server",
                    "A batch system"
                ],
                correctAnswer: 0,
                explanation: "According to Problem 6, cloud services like Amazon EC2 can emulate an event service for publish/subscribe patterns."
            }
        ]
    },
    "distributed-systems-part2": {
        title: "Distributed Systems Part 2",
        questions: [
            {
                question: "According to the lecture, cloud computing can be classified by which of the following?",
                options: [
                    "Memory size only",
                    "Process execution, administration, and data type",
                    "Number of CPUs only",
                    "Disk speed"
                ],
                correctAnswer: 1,
                explanation: "Cloud computing can be classified by process execution, administration, and data type according to the lecture."
            },
            {
                question: "Which type of cloud application runs multiple instances concurrently and requires reliable, in-order message delivery?",
                options: [
                    "Batch processing systems",
                    "Transaction processing systems (e.g., web-based services)",
                    "Single-threaded applications",
                    "Offline analytics"
                ],
                correctAnswer: 1,
                explanation: "Transaction processing systems like web-based services run multiple instances concurrently and require reliable, in-order message delivery."
            },
            {
                question: "Data-intensive cloud applications typically use:",
                options: [
                    "A single instance",
                    "Multiple concurrent instances",
                    "No instances",
                    "Only sequential processing"
                ],
                correctAnswer: 1,
                explanation: "Data-intensive cloud applications typically use multiple concurrent instances to handle large volumes of data."
            },
            {
                question: "Which of the following is NOT a characteristic of parallel computing mentioned in the classification?",
                options: [
                    "High performance",
                    "Fault tolerance",
                    "Single-thread execution only",
                    "High resource utilization"
                ],
                correctAnswer: 2,
                explanation: "Single-thread execution only is NOT a characteristic of parallel computing; parallel computing involves multiple execution paths."
            },
            {
                question: "Distributed computing provides all of the following EXCEPT:",
                options: [
                    "Fault tolerance",
                    "High availability",
                    "Single point of failure as a feature",
                    "Data recovery"
                ],
                correctAnswer: 2,
                explanation: "Distributed computing does NOT provide a single point of failure as a feature; it aims to eliminate single points of failure."
            },
            {
                question: "The Client/Server model is described as:",
                options: [
                    "Complex and difficult to implement",
                    "A simple model that supports transparency",
                    "Only suitable for data-intensive applications",
                    "Not supporting distributed nature hiding"
                ],
                correctAnswer: 1,
                explanation: "The Client/Server model is described as a simple model that supports transparency in distributed systems."
            },
            {
                question: "Which type of computing hides the distributed nature of the system from users?",
                options: [
                    "Parallel computing only",
                    "Distributed computing with transparency",
                    "Single-processor computing",
                    "Batch computing"
                ],
                correctAnswer: 1,
                explanation: "Distributed computing with transparency hides the distributed nature of the system from users."
            },
            {
                question: "Data Non-intensive vs. Data Intensive classification refers to:",
                options: [
                    "Number of users",
                    "Amount of data processed by cloud applications",
                    "CPU clock speed",
                    "Memory size"
                ],
                correctAnswer: 1,
                explanation: "Data Non-intensive vs. Data Intensive classification refers to the amount of data processed by cloud applications."
            },
            {
                question: "Which level of parallel computing deals with the number of bits processed per clock cycle?",
                options: [
                    "Instruction-level parallelism",
                    "Bit-level parallelism",
                    "Task parallelism",
                    "Data parallelism"
                ],
                correctAnswer: 1,
                explanation: "Bit-level parallelism deals with the number of bits processed per clock cycle."
            },
            {
                question: "The word size has evolved from 4-bit to 64-bit. This improvement primarily:",
                options: [
                    "Increases memory size",
                    "Reduces the number of instructions required to process larger operands",
                    "Slows down execution",
                    "Removes the need for pipelines"
                ],
                correctAnswer: 1,
                explanation: "The evolution from 4-bit to 64-bit word size reduces the number of instructions required to process larger operands."
            },
            {
                question: "A classic RISC pipeline consists of how many stages?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correctAnswer: 2,
                explanation: "A classic RISC pipeline consists of 5 stages: IF, ID, EX, MEM, WB."
            },
            {
                question: "Which parallel computing level uses an n-stage pipeline to complete one instruction per clock cycle when full?",
                options: [
                    "Bit-level parallelism",
                    "Instruction-level parallelism (pipelining)",
                    "Data parallelism",
                    "Task parallelism"
                ],
                correctAnswer: 1,
                explanation: "Instruction-level parallelism (pipelining) uses an n-stage pipeline to complete one instruction per clock cycle when full."
            },
            {
                question: "SPMD stands for:",
                options: [
                    "Single Program Multiple Data",
                    "Single Processor Multiple Devices",
                    "Same Process Multiple Directives",
                    "Simple Program Mixed Data"
                ],
                correctAnswer: 0,
                explanation: "SPMD stands for Single Program Multiple Data."
            },
            {
                question: "In SPMD, individual processors run:",
                options: [
                    "Different programs on the same data",
                    "The same program on different segments of input data",
                    "Different programs on different data",
                    "Only one program total"
                ],
                correctAnswer: 1,
                explanation: "In SPMD, individual processors run the same program on different segments of input data."
            },
            {
                question: "In distributed memory parallel computing, each node has:",
                options: [
                    "Shared memory accessible by all",
                    "Its own private memory",
                    "No memory",
                    "Only cache memory"
                ],
                correctAnswer: 1,
                explanation: "In distributed memory parallel computing, each node has its own private memory."
            },
            {
                question: "In shared memory parallel computing:",
                options: [
                    "Each node has private memory",
                    "A single memory is shared between all nodes",
                    "Memory is not used",
                    "Only one node can access memory"
                ],
                correctAnswer: 1,
                explanation: "In shared memory parallel computing, a single memory is shared between all nodes."
            },
            {
                question: "Which type of memory architecture is typical in cluster computing?",
                options: [
                    "Only shared memory",
                    "Distributed memory (each node has its own)",
                    "No memory",
                    "Virtual memory only"
                ],
                correctAnswer: 1,
                explanation: "Distributed memory architecture is typical in cluster computing where each node has its own memory."
            },
            {
                question: "Shared memory systems generally provide:",
                options: [
                    "Slower communication",
                    "Faster data sharing between nodes",
                    "No communication between nodes",
                    "Only local processing"
                ],
                correctAnswer: 1,
                explanation: "Shared memory systems generally provide faster data sharing between nodes due to direct memory access."
            },
            {
                question: "Which of the following is a High Performance Distributed Computing System?",
                options: [
                    "Mobile Computing",
                    "Sensor Networks",
                    "Grid Computing and Cluster Computing",
                    "Transaction Middleware"
                ],
                correctAnswer: 2,
                explanation: "Grid Computing and Cluster Computing are examples of High Performance Distributed Computing Systems."
            },
            {
                question: "Hadoop is an example of:",
                options: [
                    "Grid Computing",
                    "Cluster Computing",
                    "Mobile Computing",
                    "Sensor Networks"
                ],
                correctAnswer: 1,
                explanation: "Hadoop is an example of Cluster Computing."
            },
            {
                question: "Blockchain is mentioned as an example of:",
                options: [
                    "Cluster Computing",
                    "Distributed Information Systems",
                    "Grid Computing",
                    "Pervasive Services"
                ],
                correctAnswer: 2,
                explanation: "Blockchain is mentioned as an example of Grid Computing."
            },
            {
                question: "Transaction Middleware (e.g., RPC, MoM) belongs to which category?",
                options: [
                    "High Performance Computing",
                    "Distributed Information Systems",
                    "Pervasive Services",
                    "Parallel Computing"
                ],
                correctAnswer: 1,
                explanation: "Transaction Middleware (e.g., RPC, MoM) belongs to Distributed Information Systems."
            },
            {
                question: "Mobile Computing and Sensor Networks are examples of:",
                options: [
                    "High Performance Computing",
                    "Distributed Information Systems",
                    "Distributed Systems for Pervasive Services",
                    "Cluster Computing"
                ],
                correctAnswer: 2,
                explanation: "Mobile Computing and Sensor Networks are examples of Distributed Systems for Pervasive Services."
            },
            {
                question: "Which type of distributed system focuses on ubiquitous service?",
                options: [
                    "High Performance",
                    "Distributed Information Systems",
                    "Pervasive Services",
                    "Batch Systems"
                ],
                correctAnswer: 2,
                explanation: "Pervasive Services focus on ubiquitous service availability."
            },
            {
                question: "Which process state means the process is currently being executed by the CPU?",
                options: [
                    "New",
                    "Ready",
                    "Running",
                    "Blocked"
                ],
                correctAnswer: 2,
                explanation: "The Running state means the process is currently being executed by the CPU."
            },
            {
                question: "A process that is waiting for an I/O event is in which state?",
                options: [
                    "Running",
                    "Ready",
                    "Blocked/Waiting",
                    "Terminated"
                ],
                correctAnswer: 2,
                explanation: "A process waiting for an I/O event is in the Blocked/Waiting state."
            },
            {
                question: "A process that is swapped to virtual memory is in which state?",
                options: [
                    "New",
                    "Runnable",
                    "Suspended",
                    "Terminated"
                ],
                correctAnswer: 2,
                explanation: "A process swapped to virtual memory is in the Suspended state."
            },
            {
                question: "Which scheduling algorithms are mentioned in the lecture?",
                options: [
                    "Round Robin only",
                    "FCFS, SJF, Priority",
                    "Only Priority",
                    "Only FCFS"
                ],
                correctAnswer: 1,
                explanation: "FCFS (First-Come First-Served), SJF (Shortest Job First), and Priority scheduling algorithms are mentioned in the lecture."
            },
            {
                question: "The dispatcher is responsible for:",
                options: [
                    "Compiling programs",
                    "Loading and executing processes",
                    "Managing disk space",
                    "Network communication"
                ],
                correctAnswer: 1,
                explanation: "The dispatcher is responsible for loading and executing processes."
            },
            {
                question: "The ready queue contains processes that are:",
                options: [
                    "Currently running",
                    "Ready to run but waiting for CPU",
                    "Terminated",
                    "Blocked"
                ],
                correctAnswer: 1,
                explanation: "The ready queue contains processes that are ready to run but waiting for CPU."
            },
            {
                question: "The input queue contains processes that are:",
                options: [
                    "Already loaded in memory",
                    "Waiting to be loaded into memory",
                    "Currently executing",
                    "Suspended"
                ],
                correctAnswer: 1,
                explanation: "The input queue contains processes that are waiting to be loaded into memory."
            },
            {
                question: "The bootstrap loader is responsible for:",
                options: [
                    "Loading the operating system into memory",
                    "Managing threads",
                    "Handling RPC calls",
                    "Scheduling processes"
                ],
                correctAnswer: 0,
                explanation: "The bootstrap loader is responsible for loading the operating system into memory."
            },
            {
                question: "The kernel of the OS resides in:",
                options: [
                    "User space",
                    "Kernel space",
                    "Application space",
                    "Disk only"
                ],
                correctAnswer: 1,
                explanation: "The kernel of the OS resides in kernel space."
            },
            {
                question: "In distributed system architecture, software components are described as:",
                options: [
                    "Tightly coupled",
                    "Loosely coupling to reduce dependency",
                    "Fully dependent",
                    "Not replaceable"
                ],
                correctAnswer: 1,
                explanation: "Software components in distributed systems are described as loosely coupled to reduce dependency."
            },
            {
                question: "Hardware components in distributed systems are described as:",
                options: [
                    "Loosely coupled",
                    "Tightly coupling to increase speed and improve real-time processing",
                    "Unreliable",
                    "Not important"
                ],
                correctAnswer: 1,
                explanation: "Hardware components in distributed systems are described as tightly coupled to increase speed and improve real-time processing."
            },
            {
                question: "Hot add resources / cool remove resources refers to:",
                options: [
                    "Temperature control",
                    "Ability to add or remove resources without shutting down the system",
                    "Cooling fans",
                    "Power management"
                ],
                correctAnswer: 1,
                explanation: "Hot add resources / cool remove resources refers to the ability to add or remove resources without shutting down the system."
            },
            {
                question: "Which architecture style uses method calls (RPC) between loosely coupled objects?",
                options: [
                    "Layered style",
                    "Object-based style",
                    "Resource-based style",
                    "Publish-subscribe style"
                ],
                correctAnswer: 1,
                explanation: "Object-based style uses method calls (RPC) between loosely coupled objects."
            },
            {
                question: "In object-based style, data encapsulation is called:",
                options: [
                    "Object's method",
                    "Object's state",
                    "Object's interface",
                    "Object's protocol"
                ],
                correctAnswer: 1,
                explanation: "In object-based style, data encapsulation is called the object's state."
            },
            {
                question: "RESTful architecture is a result of increasing:",
                options: [
                    "CPU speed",
                    "Web pages and users' demands for service composition",
                    "Memory size",
                    "Disk capacity"
                ],
                correctAnswer: 1,
                explanation: "RESTful architecture is a result of increasing web pages and users' demands for service composition."
            },
            {
                question: "In RESTful architecture, stateless execution means:",
                options: [
                    "Server remembers all previous requests",
                    "After executing an operation, the component forgets everything about the caller",
                    "No resources can be modified",
                    "Only GET operations are allowed"
                ],
                correctAnswer: 1,
                explanation: "In RESTful architecture, stateless execution means after executing an operation, the component forgets everything about the caller."
            },
            {
                question: "Which benefit is associated with publish-subscribe style?",
                options: [
                    "Decreased reliability",
                    "Increased reliability and improved scalability",
                    "Slower communication",
                    "Tight coupling"
                ],
                correctAnswer: 1,
                explanation: "Publish-subscribe style provides increased reliability and improved scalability."
            },
            {
                question: "The two forms of coordination in publish-subscribe style are:",
                options: [
                    "Temporal coupling and referential coupling",
                    "Memory and disk",
                    "CPU and GPU",
                    "Client and server only"
                ],
                correctAnswer: 0,
                explanation: "The two forms of coordination in publish-subscribe style are temporal coupling and referential coupling."
            },
            {
                question: "A program is a __________ entity.",
                options: [
                    "Active",
                    "Passive",
                    "Executing",
                    "Dynamic"
                ],
                correctAnswer: 1,
                explanation: "A program is a passive entity stored on disk."
            },
            {
                question: "A process is a __________ entity.",
                options: [
                    "Passive",
                    "Active",
                    "Static",
                    "Stored only on disk"
                ],
                correctAnswer: 1,
                explanation: "A process is an active entity that is being executed."
            },
            {
                question: "Which of the following contains shell scripts and batch files?",
                options: [
                    "Process",
                    "Thread",
                    "Program",
                    "Kernel"
                ],
                correctAnswer: 2,
                explanation: "A program contains shell scripts and batch files."
            },
            {
                question: "The context of a process contains all process state information and is stored in:",
                options: [
                    "Disk",
                    "Process Control Block (PCB)",
                    "User space",
                    "Network buffer"
                ],
                correctAnswer: 1,
                explanation: "The context of a process is stored in the Process Control Block (PCB)."
            },
            {
                question: "Virtual memory segregation into user space and kernel space provides:",
                options: [
                    "Faster computation",
                    "Memory protection and hardware protection",
                    "Network security only",
                    "Disk optimization"
                ],
                correctAnswer: 1,
                explanation: "Virtual memory segregation into user space and kernel space provides memory protection and hardware protection."
            },
            {
                question: "Batch system jobs typically execute in:",
                options: [
                    "User space",
                    "Kernel space",
                    "Both user and kernel space equally",
                    "No space"
                ],
                correctAnswer: 1,
                explanation: "Batch system jobs typically execute in kernel space."
            },
            {
                question: "Which RPC semantics is suitable for operations free of side effects?",
                options: [
                    "At most once",
                    "Exactly once",
                    "At least once",
                    "Once and forget"
                ],
                correctAnswer: 2,
                explanation: "At least once semantics is suitable for operations free of side effects."
            },
            {
                question: "According to Problem 6, the publish/subscribe paradigm can be applied to services such as bulletin boards and mailing lists. Which cloud service can emulate an event service?",
                options: [
                    "Amazon SQS/SNS (standard answer for event service)",
                    "Amazon S3 (mentioned for REST)",
                    "Amazon EC2",
                    "Amazon RDS"
                ],
                correctAnswer: 0,
                explanation: "Amazon SQS/SNS are cloud services that can emulate an event service for publish/subscribe patterns."
            }
        ]
    },
    "cloud-virtualization": {
        title: "CloudComputing-Virtualization",
        questions: [
            {
                question: "What is the foundation of cloud computing according to the lecture?",
                options: [
                    "Containerization",
                    "Virtualization",
                    "Bare-metal servers",
                    "Distributed databases"
                ],
                correctAnswer: 1,
                explanation: "Virtualization is the foundation of cloud computing according to the lecture."
            },
            {
                question: "Virtualization creates an abstraction layer over which component?",
                options: [
                    "Application software",
                    "Computer hardware",
                    "Network protocols",
                    "User interface"
                ],
                correctAnswer: 1,
                explanation: "Virtualization creates an abstraction layer over computer hardware."
            },
            {
                question: "What does virtualization enable a single computer's hardware to be divided into?",
                options: [
                    "Multiple containers",
                    "Multiple virtual machines (VMs)",
                    "Multiple kernels",
                    "Multiple user accounts"
                ],
                correctAnswer: 1,
                explanation: "Virtualization enables a single computer's hardware to be divided into multiple virtual machines (VMs)."
            },
            {
                question: "Each virtual machine (VM) runs its own:",
                options: [
                    "Operating system (OS)",
                    "Hypervisor only",
                    "Hardware abstraction layer only",
                    "Network stack only"
                ],
                correctAnswer: 0,
                explanation: "Each virtual machine (VM) runs its own operating system (OS)."
            },
            {
                question: "A VM behaves like:",
                options: [
                    "A container",
                    "An independent computer",
                    "A network switch",
                    "A storage device"
                ],
                correctAnswer: 1,
                explanation: "A VM behaves like an independent computer."
            },
            {
                question: "Which company launched x86-based virtualization products in 1999?",
                options: [
                    "Microsoft",
                    "IBM",
                    "VMware",
                    "HP"
                ],
                correctAnswer: 2,
                explanation: "VMware launched x86-based virtualization products in 1999."
            },
            {
                question: "In which year was KVM first announced by Qumranet?",
                options: [
                    "2002",
                    "2004",
                    "2006",
                    "2008"
                ],
                correctAnswer: 2,
                explanation: "KVM was first announced by Qumranet in 2006."
            },
            {
                question: "Which operating system added Hyper-V in Windows Server 2008 R2?",
                options: [
                    "Linux",
                    "macOS",
                    "Microsoft Windows",
                    "Solaris"
                ],
                correctAnswer: 2,
                explanation: "Microsoft Windows added Hyper-V in Windows Server 2008 R2."
            },
            {
                question: "The physical machine that runs virtualization software is called:",
                options: [
                    "Guest machine",
                    "Host machine",
                    "Virtual machine",
                    "Container"
                ],
                correctAnswer: 1,
                explanation: "The physical machine that runs virtualization software is called the Host machine."
            },
            {
                question: "The operating system running in a virtual machine is called:",
                options: [
                    "Host OS",
                    "Guest OS",
                    "Bare-metal OS",
                    "Hypervisor OS"
                ],
                correctAnswer: 1,
                explanation: "The operating system running in a virtual machine is called the Guest OS."
            },
            {
                question: "The virtualization software layer is also known as:",
                options: [
                    "Container engine",
                    "Virtual Machine Monitor (VMM)",
                    "Guest kernel",
                    "Host kernel"
                ],
                correctAnswer: 1,
                explanation: "The virtualization software layer is also known as Virtual Machine Monitor (VMM)."
            },
            {
                question: "The virtual machine created through virtualization is called:",
                options: [
                    "Host machine",
                    "Guest machine",
                    "Physical machine",
                    "Bare-metal server"
                ],
                correctAnswer: 1,
                explanation: "The virtual machine created through virtualization is called the Guest machine."
            },
            {
                question: "Which of the following is NOT a category of virtualization technology mentioned?",
                options: [
                    "Server virtualization",
                    "Desktop virtualization",
                    "Database virtualization",
                    "Network virtualization"
                ],
                correctAnswer: 2,
                explanation: "Database virtualization is NOT a category of virtualization technology mentioned in the lecture."
            },
            {
                question: "Which two categories of compute virtualization are mentioned?",
                options: [
                    "Bare-Metal and Hosted",
                    "Full and Para",
                    "Type 1 and Type 3",
                    "KVM and Xen only"
                ],
                correctAnswer: 0,
                explanation: "Bare-Metal and Hosted are the two categories of compute virtualization mentioned."
            },
            {
                question: "Bare-Metal Virtualization is also known as:",
                options: [
                    "Type 1",
                    "Type 2",
                    "Type 3",
                    "Hosted virtualization"
                ],
                correctAnswer: 0,
                explanation: "Bare-Metal Virtualization is also known as Type 1."
            },
            {
                question: "In Bare-Metal (Type 1) virtualization, the hypervisor runs directly on:",
                options: [
                    "The host OS",
                    "The guest OS",
                    "The hardware",
                    "A container"
                ],
                correctAnswer: 2,
                explanation: "In Bare-Metal (Type 1) virtualization, the hypervisor runs directly on the hardware."
            },
            {
                question: "Hosted Virtualization is also known as:",
                options: [
                    "Type 1",
                    "Type 2",
                    "Bare-metal",
                    "Native virtualization"
                ],
                correctAnswer: 1,
                explanation: "Hosted Virtualization is also known as Type 2."
            },
            {
                question: "In Hosted (Type 2) virtualization, the hypervisor runs on top of:",
                options: [
                    "The hardware directly",
                    "A guest OS",
                    "A host OS",
                    "Another hypervisor"
                ],
                correctAnswer: 2,
                explanation: "In Hosted (Type 2) virtualization, the hypervisor runs on top of a host OS."
            },
            {
                question: "Which of the following is a characteristic of virtualization?",
                options: [
                    "Shared",
                    "Partitioned",
                    "Temporary",
                    "Unstable"
                ],
                correctAnswer: 1,
                explanation: "Partitioned is a characteristic of virtualization."
            },
            {
                question: "Virtualization allows VMs to be isolated from each other. This characteristic is called:",
                options: [
                    "Partitioned",
                    "Isolated",
                    "Encapsulated",
                    "Independent"
                ],
                correctAnswer: 1,
                explanation: "The characteristic that VMs are isolated from each other is called Isolated."
            },
            {
                question: "The fact that a VM can be moved, copied, or saved as files is called:",
                options: [
                    "Partitioned",
                    "Isolated",
                    "Encapsulated",
                    "Independent"
                ],
                correctAnswer: 2,
                explanation: "The fact that a VM can be moved, copied, or saved as files is called Encapsulated."
            },
            {
                question: "VMs run independently without requiring special hardware configuration. This characteristic is called:",
                options: [
                    "Partitioned",
                    "Isolated",
                    "Encapsulated",
                    "Independent"
                ],
                correctAnswer: 3,
                explanation: "VMs running independently without requiring special hardware configuration is called Independent."
            },
            {
                question: "Which virtualization type uses a hypervisor to directly manage hardware and guest OS without modification?",
                options: [
                    "Paravirtualization",
                    "Full virtualization",
                    "Containerization",
                    "Emulation"
                ],
                correctAnswer: 1,
                explanation: "Full virtualization uses a hypervisor to directly manage hardware and guest OS without modification."
            },
            {
                question: "In paravirtualization, the guest OS is:",
                options: [
                    "Unmodified",
                    "Modified to work with the hypervisor",
                    "Running in user space",
                    "Not used"
                ],
                correctAnswer: 1,
                explanation: "In paravirtualization, the guest OS is modified to work with the hypervisor."
            },
            {
                question: "Which I/O virtualization mode provides the highest performance by directly allocating hardware devices to VMs?",
                options: [
                    "Emulation",
                    "Paravirtualization",
                    "IO-through (passthrough)",
                    "Full virtualization"
                ],
                correctAnswer: 2,
                explanation: "IO-through (passthrough) provides the highest performance by directly allocating hardware devices to VMs."
            },
            {
                question: "Emulation (full virtualization) for devices like keyboard and mouse can lead to:",
                options: [
                    "High performance",
                    "Poor performance in some cases",
                    "No performance impact",
                    "Hardware failure"
                ],
                correctAnswer: 1,
                explanation: "Emulation (full virtualization) for devices like keyboard and mouse can lead to poor performance in some cases."
            },
            {
                question: "Paravirtualization for hard disks and NICs delivers:",
                options: [
                    "Low performance",
                    "High performance",
                    "No improvement",
                    "Only works for keyboards"
                ],
                correctAnswer: 1,
                explanation: "Paravirtualization for hard disks and NICs delivers high performance."
            },
            {
                question: "KVM (Kernel-based Virtual Machine) is integrated into which operating system's kernel?",
                options: [
                    "Windows",
                    "Linux",
                    "macOS",
                    "FreeBSD"
                ],
                correctAnswer: 1,
                explanation: "KVM (Kernel-based Virtual Machine) is integrated into the Linux kernel."
            },
            {
                question: "In KVM architecture, QEMU is used for:",
                options: [
                    "Managing host OS",
                    "Device emulation and I/O virtualization",
                    "Memory partitioning only",
                    "CPU scheduling only"
                ],
                correctAnswer: 1,
                explanation: "In KVM architecture, QEMU is used for device emulation and I/O virtualization."
            },
            {
                question: "Which management tool is NOT listed as a KVM management tool in the lecture?",
                options: [
                    "Virsh",
                    "Virt-manager",
                    "Docker",
                    "Virt-viewer"
                ],
                correctAnswer: 2,
                explanation: "Docker is NOT listed as a KVM management tool in the lecture."
            }
        ]
    },
    "virtualization": {
        title: "Virtualization",
        questions: [
            {
                question: "What are the three fundamental abstractions necessary to describe the operation of a computing system?",
                options: [
                    "CPU, GPU, RAM",
                    "Interpreters/processors, memory, communications links",
                    "OS, applications, users",
                    "Input, output, storage"
                ],
                correctAnswer: 1,
                explanation: "The three fundamental abstractions are interpreters/processors, memory, and communications links."
            },
            {
                question: "Overprovisioning refers to:",
                options: [
                    "Using too little resources",
                    "Provisioning for peak demands, leading to wasted resources",
                    "Dynamic resource allocation",
                    "Virtual memory management"
                ],
                correctAnswer: 1,
                explanation: "Overprovisioning refers to provisioning for peak demands, leading to wasted resources."
            },
            {
                question: "Virtualization simplifies the management of physical resources for which three abstractions?",
                options: [
                    "CPU, disk, network",
                    "Processors, memory, communications",
                    "OS, libraries, applications",
                    "User space, kernel space, hardware"
                ],
                correctAnswer: 1,
                explanation: "Virtualization simplifies the management of physical resources for processors, memory, and communications."
            },
            {
                question: "According to the lecture, the state of a virtual machine (VM) can be saved and migrated to another server to:",
                options: [
                    "Increase power consumption",
                    "Balance the load",
                    "Reduce security",
                    "Increase hardware cost"
                ],
                correctAnswer: 1,
                explanation: "The state of a VM can be saved and migrated to another server to balance the load."
            },
            {
                question: "Which of the following is NOT listed as an important aspect of cloud resource virtualization?",
                options: [
                    "Performance isolation",
                    "System security",
                    "Increased hardware failure rate",
                    "Performance and reliability"
                ],
                correctAnswer: 2,
                explanation: "Increased hardware failure rate is NOT listed as an important aspect of cloud resource virtualization."
            },
            {
                question: "Virtualization allows applications to migrate from one platform to another, improving:",
                options: [
                    "Security only",
                    "Performance and reliability",
                    "Power usage only",
                    "Network latency only"
                ],
                correctAnswer: 1,
                explanation: "Virtualization allows applications to migrate from one platform to another, improving performance and reliability."
            },
            {
                question: "Which virtualization operation creates multiple virtual objects from one instance of a physical object?",
                options: [
                    "Aggregation",
                    "Emulation",
                    "Multiplexing",
                    "Simulation"
                ],
                correctAnswer: 2,
                explanation: "Multiplexing creates multiple virtual objects from one instance of a physical object."
            },
            {
                question: "A processor being multiplexed among a number of processes is an example of:",
                options: [
                    "Aggregation",
                    "Multiplexing",
                    "Emulation",
                    "Encapsulation"
                ],
                correctAnswer: 1,
                explanation: "A processor being multiplexed among a number of processes is an example of multiplexing."
            },
            {
                question: "Which operation creates one virtual object from multiple physical objects?",
                options: [
                    "Multiplexing",
                    "Emulation",
                    "Aggregation",
                    "Partitioning"
                ],
                correctAnswer: 2,
                explanation: "Aggregation creates one virtual object from multiple physical objects."
            },
            {
                question: "A number of physical disks aggregated into a RAID disk is an example of:",
                options: [
                    "Multiplexing",
                    "Emulation",
                    "Aggregation",
                    "Fragmentation"
                ],
                correctAnswer: 2,
                explanation: "A number of physical disks aggregated into a RAID disk is an example of aggregation."
            },
            {
                question: "Which operation constructs a virtual object of a certain type from a different type of physical object?",
                options: [
                    "Multiplexing",
                    "Aggregation",
                    "Emulation",
                    "Replication"
                ],
                correctAnswer: 2,
                explanation: "Emulation constructs a virtual object of a certain type from a different type of physical object."
            },
            {
                question: "What does RAID stand for?",
                options: [
                    "Random Array of Independent Disks",
                    "Redundant Array of Independent Disks",
                    "Reliable Array of Integrated Disks",
                    "Rapid Access of Identical Disks"
                ],
                correctAnswer: 1,
                explanation: "RAID stands for Redundant Array of Independent Disks."
            },
            {
                question: "Which RAID technique splits a file into small pieces to accelerate speed?",
                options: [
                    "Mirroring",
                    "Parity",
                    "Striping",
                    "Caching"
                ],
                correctAnswer: 2,
                explanation: "Striping splits a file into small pieces to accelerate speed."
            },
            {
                question: "Which RAID technique copies data on different disks to improve security and data availability?",
                options: [
                    "Striping",
                    "Mirroring",
                    "Parity",
                    "Compressing"
                ],
                correctAnswer: 1,
                explanation: "Mirroring copies data on different disks to improve security and data availability."
            },
            {
                question: "RAID 5 uses which combination?",
                options: [
                    "Striping only",
                    "Mirroring only",
                    "Striping + Parity",
                    "Striping + Mirroring"
                ],
                correctAnswer: 2,
                explanation: "RAID 5 uses Striping + Parity."
            },
            {
                question: "Which interface sits at the boundary between hardware and software?",
                options: [
                    "API",
                    "ABI",
                    "ISA",
                    "HLL"
                ],
                correctAnswer: 2,
                explanation: "ISA (Instruction Set Architecture) sits at the boundary between hardware and software."
            },
            {
                question: "Which interface allows the ensemble of application and library modules to access hardware without privileged system instructions?",
                options: [
                    "ISA",
                    "ABI",
                    "API",
                    "VMM"
                ],
                correctAnswer: 1,
                explanation: "ABI (Application Binary Interface) allows applications and libraries to access hardware without privileged system instructions."
            },
            {
                question: "Which interface defines the set of instructions the hardware was designed to execute and includes high-level language library calls?",
                options: [
                    "ISA",
                    "ABI",
                    "API",
                    "Hypercall"
                ],
                correctAnswer: 2,
                explanation: "API (Application Programming Interface) defines the set of instructions and includes high-level language library calls."
            },
            {
                question: "Binaries created for a specific ISA and operating system are:",
                options: [
                    "Fully portable",
                    "Not portable",
                    "Always executable on any system",
                    "Hardware-independent"
                ],
                correctAnswer: 1,
                explanation: "Binaries created for a specific ISA and operating system are not portable."
            },
            {
                question: "Dynamic binary translation converts blocks of guest instructions to host instructions and:",
                options: [
                    "Decreases performance",
                    "Caches results for reuse, improving performance",
                    "Removes the need for a CPU",
                    "Only works for ARM"
                ],
                correctAnswer: 1,
                explanation: "Dynamic binary translation caches results for reuse, improving performance."
            },
            {
                question: "According to the history timeline, VMware popularized virtualization for the masses in which decade?",
                options: [
                    "1960s",
                    "1980s",
                    "1990s",
                    "2000s"
                ],
                correctAnswer: 2,
                explanation: "VMware popularized virtualization for the masses in the 1990s."
            },
            {
                question: "A VMM partitions resources of a computer system into one or more:",
                options: [
                    "Containers",
                    "Virtual machines (VMs)",
                    "Kernels",
                    "User spaces"
                ],
                correctAnswer: 1,
                explanation: "A VMM partitions resources of a computer system into one or more virtual machines (VMs)."
            },
            {
                question: "Which of the following is a function of the VMM?",
                options: [
                    "Trapping privileged instructions executed by guest OS",
                    "Compiling user applications",
                    "Managing network switches",
                    "Providing a GUI"
                ],
                correctAnswer: 0,
                explanation: "A function of the VMM is trapping privileged instructions executed by guest OS."
            },
            {
                question: "The VMM maintains a __________ page table for each guest OS.",
                options: [
                    "Shared",
                    "Shadow",
                    "Primary",
                    "Temporary"
                ],
                correctAnswer: 1,
                explanation: "The VMM maintains a shadow page table for each guest OS."
            },
            {
                question: "A Type 1 hypervisor runs:",
                options: [
                    "Under a host operating system",
                    "Directly on the hardware (bare metal)",
                    "Inside a virtual machine",
                    "As a user application"
                ],
                correctAnswer: 1,
                explanation: "A Type 1 hypervisor runs directly on the hardware (bare metal)."
            },
            {
                question: "Which of the following is an example of a Type 2 hypervisor?",
                options: [
                    "VMware ESX",
                    "Xen",
                    "User-mode Linux (hosted)",
                    "Denali"
                ],
                correctAnswer: 2,
                explanation: "User-mode Linux (hosted) is an example of a Type 2 hypervisor."
            },
            {
                question: "According to Popek and Goldberg, a statistically significant fraction of machine instructions must be executed without VMM intervention to achieve:",
                options: [
                    "Security",
                    "Efficiency",
                    "Isolation",
                    "Portability"
                ],
                correctAnswer: 1,
                explanation: "According to Popek and Goldberg, efficiency requires a statistically significant fraction of machine instructions to be executed without VMM intervention."
            },
            {
                question: "In x86 architecture, which ring should the VMM ideally run in?",
                options: [
                    "Ring 0",
                    "Ring 1",
                    "Ring 2",
                    "Ring 3"
                ],
                correctAnswer: 0,
                explanation: "In x86 architecture, the VMM should ideally run in Ring 0 (with OS moved to ring 1)."
            },
            {
                question: "Which class of instructions are hard to virtualize because they can be executed in either kernel or user mode but behave differently?",
                options: [
                    "Privileged instructions",
                    "Nonprivileged instructions",
                    "Sensitive instructions",
                    "Trapping instructions"
                ],
                correctAnswer: 2,
                explanation: "Sensitive instructions are hard to virtualize because they can be executed in either kernel or user mode but behave differently."
            },
            {
                question: "Full virtualization with binary translation rewrites parts of code to replace:",
                options: [
                    "Privileged instructions",
                    "Sensitive but not privileged instructions",
                    "All user-level instructions",
                    "System calls only"
                ],
                correctAnswer: 1,
                explanation: "Full virtualization with binary translation rewrites parts of code to replace sensitive but not privileged instructions."
            },
            {
                question: "Which virtualization technique modifies the OS kernel to replace non-virtualizable instructions with hypercalls?",
                options: [
                    "Full virtualization",
                    "Paravirtualization",
                    "Hardware-assisted virtualization",
                    "Emulation"
                ],
                correctAnswer: 1,
                explanation: "Paravirtualization modifies the OS kernel to replace non-virtualizable instructions with hypercalls."
            },
            {
                question: "Which technique introduces a new CPU execution mode (root mode below ring 0) to automatically trap privileged calls?",
                options: [
                    "Full virtualization",
                    "Paravirtualization",
                    "Hardware-assisted virtualization",
                    "Binary translation"
                ],
                correctAnswer: 2,
                explanation: "Hardware-assisted virtualization introduces a new CPU execution mode (root mode below ring 0) to automatically trap privileged calls."
            },
            {
                question: "Intel VT-x supports which two modes of operation?",
                options: [
                    "User mode and kernel mode",
                    "VMX root and VMX non-root",
                    "Host mode and guest mode",
                    "Real mode and protected mode"
                ],
                correctAnswer: 1,
                explanation: "Intel VT-x supports VMX root and VMX non-root modes of operation."
            },
            {
                question: "In VT-x, VM entry transfers control from:",
                options: [
                    "VMM to VM",
                    "VM to VMM",
                    "Guest OS to application",
                    "Application to kernel"
                ],
                correctAnswer: 0,
                explanation: "In VT-x, VM entry transfers control from VMM to VM."
            },
            {
                question: "In Xen, the domain dedicated to execution of control functions and privileged instructions is called:",
                options: [
                    "DomU",
                    "Dom0",
                    "Dom1",
                    "Hypercall domain"
                ],
                correctAnswer: 1,
                explanation: "In Xen, Dom0 is the domain dedicated to execution of control functions and privileged instructions."
            },
            {
                question: "In Xen, hypercalls are used by:",
                options: [
                    "User applications only",
                    "Guest OS to communicate with Xen",
                    "Hardware devices",
                    "Network switches"
                ],
                correctAnswer: 1,
                explanation: "In Xen, hypercalls are used by guest OS to communicate with Xen."
            },
            {
                question: "XenStore in Xen is a:",
                options: [
                    "Memory allocator",
                    "System-wide registry and naming service",
                    "CPU scheduler",
                    "Network driver"
                ],
                correctAnswer: 1,
                explanation: "XenStore in Xen is a system-wide registry and naming service."
            },
            {
                question: "The Xen Toolstack is responsible for:",
                options: [
                    "Running user applications",
                    "Creating, destroying, and managing VMs",
                    "Compiling the kernel",
                    "Network routing"
                ],
                correctAnswer: 1,
                explanation: "The Xen Toolstack is responsible for creating, destroying, and managing VMs."
            },
            {
                question: "A Linux Container is described as:",
                options: [
                    "A full virtual machine",
                    "A lightweight process virtualization with its own process network space",
                    "A Type 1 hypervisor",
                    "A hardware emulator"
                ],
                correctAnswer: 1,
                explanation: "A Linux Container is a lightweight process virtualization with its own process network space."
            },
            {
                question: "A Virtual-Machine Based Rootkit (VMBR) can be inserted between:",
                options: [
                    "Two applications",
                    "The physical hardware and an operating system",
                    "Two network cards",
                    "Two hypervisors"
                ],
                correctAnswer: 1,
                explanation: "A Virtual-Machine Based Rootkit (VMBR) can be inserted between the physical hardware and an operating system."
            }
        ]
    },
    "basics-of-network": {
        title: "Basics-of-Network",
        questions: [
            {
                question: "What does the chapter say about networks in a virtualized environment compared to traditional physical networks?",
                options: [
                    "They are exactly the same",
                    "They only use wireless connections",
                    "They include invisible networks running inside servers",
                    "They do not require any networking devices"
                ],
                correctAnswer: 2,
                explanation: "Networks in a virtualized environment include invisible networks running inside servers."
            },
            {
                question: "Which of the following is NOT mentioned as a physical network device in the slides?",
                options: [
                    "Router",
                    "Layer 3 switch",
                    "Firewall",
                    "Server NIC"
                ],
                correctAnswer: 3,
                explanation: "Server NIC is NOT mentioned as a physical network device in the slides."
            },
            {
                question: "What is the primary difference between a Layer 2 switch and a Layer 3 switch in a virtualized environment?",
                options: [
                    "Layer 2 switches are faster",
                    "Layer 3 switches can route between VLANs",
                    "Layer 2 switches have more ports",
                    "Layer 3 switches are only physical"
                ],
                correctAnswer: 1,
                explanation: "Layer 3 switches can route between VLANs, which is the primary difference."
            },
            {
                question: "Which of the following is a key learning objective of the course?",
                options: [
                    "How to build a physical server",
                    "How physical and virtual switches work",
                    "How to configure a router from scratch",
                    "How to design a data center cooling system"
                ],
                correctAnswer: 1,
                explanation: "How physical and virtual switches work is a key learning objective of the course."
            },
            {
                question: "What type of switch is Open vSwitch according to the lecture?",
                options: [
                    "A physical Layer 3 switch",
                    "A proprietary Cisco switch",
                    "A virtual switch",
                    "A Huawei distributed router"
                ],
                correctAnswer: 2,
                explanation: "Open vSwitch is a virtual switch."
            },
            {
                question: "The lecture mentions two specific virtual network architectures. Which are they?",
                options: [
                    "LAN and WAN",
                    "Bridge and NAT",
                    "TCP and UDP",
                    "IPv4 and IPv6"
                ],
                correctAnswer: 1,
                explanation: "Bridge and NAT are the two virtual network architectures mentioned."
            },
            {
                question: "In a virtualized environment, where do invisible networks run?",
                options: [
                    "Only in the physical router",
                    "Inside servers",
                    "Only in the top-of-rack switch",
                    "In the cooling system"
                ],
                correctAnswer: 1,
                explanation: "In a virtualized environment, invisible networks run inside servers."
            },
            {
                question: "Which Huawei virtualization product feature is likely covered in the last section?",
                options: [
                    "Physical router configuration",
                    "Network features of the product",
                    "Server BIOS settings",
                    "Storage array management"
                ],
                correctAnswer: 1,
                explanation: "Network features of the Huawei virtualization product are likely covered in the last section."
            },
            {
                question: "Which device is typically used to connect different IP networks or subnets in a virtualized environment?",
                options: [
                    "Layer 2 switch",
                    "Router",
                    "Bridge",
                    "NIC"
                ],
                correctAnswer: 1,
                explanation: "A router is typically used to connect different IP networks or subnets."
            },
            {
                question: "What is the role of a physical NIC in a virtualized environment?",
                options: [
                    "To provide power to the server",
                    "To connect the physical server to the physical network",
                    "To replace the need for a virtual switch",
                    "To cool the server"
                ],
                correctAnswer: 1,
                explanation: "The role of a physical NIC is to connect the physical server to the physical network."
            },
            {
                question: "A distributed virtual switch (DVS) is different from a standard virtual switch because it:",
                options: [
                    "Cannot be used with VLANs",
                    "Only works with Huawei products",
                    "Spans multiple hosts and provides centralized management",
                    "Is a physical device"
                ],
                correctAnswer: 2,
                explanation: "A DVS spans multiple hosts and provides centralized management."
            },
            {
                question: "Based on the slide 'How Do VMs Communicate?', VM traffic most likely flows through which component first?",
                options: [
                    "Physical router",
                    "Virtual switch",
                    "Internet",
                    "Layer 3 switch"
                ],
                correctAnswer: 1,
                explanation: "VM traffic most likely flows through the virtual switch first."
            },
            {
                question: "Which of the following is a basic network concept implied to be necessary before virtualization?",
                options: [
                    "Cloud billing",
                    "VLAN",
                    "Server overclocking",
                    "RAID configuration"
                ],
                correctAnswer: 1,
                explanation: "VLAN is a basic network concept implied to be necessary before virtualization."
            },
            {
                question: "In a virtualized environment, a router would most likely be used to:",
                options: [
                    "Connect virtual machines on the same host",
                    "Provide power redundancy",
                    "Route traffic between the virtualized environment and external networks",
                    "Store VM snapshots"
                ],
                correctAnswer: 2,
                explanation: "A router would route traffic between the virtualized environment and external networks."
            },
            {
                question: "Which statement about Layer 2 switches in a virtualized environment is true?",
                options: [
                    "They make forwarding decisions based on IP addresses",
                    "They make forwarding decisions based on MAC addresses",
                    "They are always virtual",
                    "They cannot be used with VLANs"
                ],
                correctAnswer: 1,
                explanation: "Layer 2 switches make forwarding decisions based on MAC addresses."
            },
            {
                question: "The lecture suggests that understanding traffic flows between VMs is important. If two VMs are on the same host and same VLAN, their traffic will likely:",
                options: [
                    "Go through the physical router",
                    "Only go through the virtual switch, not the physical network",
                    "Go through the internet",
                    "Be blocked by default"
                ],
                correctAnswer: 1,
                explanation: "If two VMs are on the same host and same VLAN, their traffic will only go through the virtual switch, not the physical network."
            },
            {
                question: "Which page of the PDF introduces the concept of VLAN?",
                options: [
                    "Page 1",
                    "Page 3",
                    "Page 9",
                    "VLAN is not mentioned"
                ],
                correctAnswer: 1,
                explanation: "Page 3 introduces the concept of VLAN."
            },
            {
                question: "What is the main function of a bridge in a virtual network architecture?",
                options: [
                    "To increase network speed",
                    "To connect two network segments and forward frames",
                    "To replace the need for an IP address",
                    "To encrypt traffic"
                ],
                correctAnswer: 1,
                explanation: "The main function of a bridge is to connect two network segments and forward frames."
            },
            {
                question: "In the context of NAT (Network Address Translation) for virtualization, what does NAT typically allow?",
                options: [
                    "VMs to have direct public IP addresses",
                    "VMs to share the host's IP address for outbound access",
                    "VMs to bypass all security rules",
                    "Physical switches to become virtual"
                ],
                correctAnswer: 1,
                explanation: "NAT typically allows VMs to share the host's IP address for outbound access."
            },
            {
                question: "Which image appears on page 9 of the PDF?",
                options: [
                    "A data center cooling diagram",
                    "Physical network devices including Router, Layer 2/3 switches, and Server NIC",
                    "A cloud computing architecture",
                    "A virtual switch configuration"
                ],
                correctAnswer: 1,
                explanation: "Page 9 shows physical network devices including Router, Layer 2/3 switches, and Server NIC."
            },
            {
                question: "The lecture separates network knowledge into two types. What are they?",
                options: [
                    "LAN and WAN",
                    "Physical network and virtual network",
                    "IPv4 and IPv6",
                    "Wired and wireless"
                ],
                correctAnswer: 1,
                explanation: "The lecture separates network knowledge into physical network and virtual network."
            },
            {
                question: "A Layer 3 switch in a virtualized environment can perform functions of both a:",
                options: [
                    "Router and a Layer 2 switch",
                    "Firewall and a server",
                    "NIC and a bridge",
                    "Hub and a repeater"
                ],
                correctAnswer: 0,
                explanation: "A Layer 3 switch can perform functions of both a router and a Layer 2 switch."
            },
            {
                question: "According to the slide 'Mainstream Virtual Network Architecture', which component is likely central to VM communication?",
                options: [
                    "Physical router only",
                    "Virtual switch",
                    "UPS",
                    "SAN switch"
                ],
                correctAnswer: 1,
                explanation: "The virtual switch is likely central to VM communication."
            },
            {
                question: "What is one benefit of using a distributed virtual switch as mentioned in the lecture?",
                options: [
                    "It requires no configuration",
                    "It is cheaper than a physical switch",
                    "It provides consistency across multiple hosts in a cluster",
                    "It eliminates the need for VLANs"
                ],
                correctAnswer: 2,
                explanation: "A distributed virtual switch provides consistency across multiple hosts in a cluster."
            },
            {
                question: "Which page of the PDF lists the four main sections of the lecture?",
                options: [
                    "Page 4",
                    "Page 8",
                    "Both Page 4 and Page 8",
                    "Page 14"
                ],
                correctAnswer: 2,
                explanation: "Both Page 4 and Page 8 list the four main sections of the lecture."
            },
            {
                question: "If a virtual environment uses Bridge mode, how do VMs typically appear on the physical network?",
                options: [
                    "They are hidden from the network",
                    "They have their own MAC and IP addresses on the same subnet as the host",
                    "They share the host's MAC address",
                    "They cannot communicate with the physical network"
                ],
                correctAnswer: 1,
                explanation: "In Bridge mode, VMs have their own MAC and IP addresses on the same subnet as the host."
            },
            {
                question: "Which of the following is a true statement about physical network devices in a virtualized environment?",
                options: [
                    "Physical devices are completely replaced by virtual devices",
                    "Physical devices are still required for external connectivity and high-performance switching",
                    "Physical devices are only used for storage",
                    "Physical devices are obsolete"
                ],
                correctAnswer: 1,
                explanation: "Physical devices are still required for external connectivity and high-performance switching."
            },
            {
                question: "The learning objectives include understanding concepts related to:",
                options: [
                    "RAID",
                    "VLAN",
                    "VPN",
                    "DNS only"
                ],
                correctAnswer: 1,
                explanation: "The learning objectives include understanding concepts related to VLAN."
            },
            {
                question: "A server NIC (Network Interface Card) in a virtualized environment is often:",
                options: [
                    "Used only for management traffic",
                    "Shared among multiple VMs via the virtual switch",
                    "Assigned to only one VM directly without a virtual switch",
                    "Not necessary if using a distributed switch"
                ],
                correctAnswer: 1,
                explanation: "A server NIC is often shared among multiple VMs via the virtual switch."
            },
            {
                question: "Based on the structure, the lecture is likely intended for:",
                options: [
                    "Beginner cloud computing or virtualization students",
                    "Hardware repair technicians only",
                    "Graphic designers",
                    "Legal professionals"
                ],
                correctAnswer: 0,
                explanation: "The lecture is likely intended for beginner cloud computing or virtualization students."
            }
        ]
    }
};

// State Management
let currentState = {
    currentCategory: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    quizCompleted: false,
    score: 0
};

// Global Statistics
let globalStats = {
    totalQuizzes: 0,
    totalCorrect: 0,
    totalQuestions: 0
};

// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

const themeToggle = document.getElementById('theme-toggle');
const globalAccuracy = document.getElementById('global-accuracy');

// Quiz Screen Elements
const quizTitle = document.getElementById('quiz-title');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestions = document.getElementById('total-questions');
const jumpToSelect = document.getElementById('jump-to-select');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationPanel = document.getElementById('explanation-panel');
const explanationText = document.getElementById('explanation-text');
const hintText = document.getElementById('hint-text');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');

// Results Screen Elements
const resultsMessage = document.getElementById('results-message');
const scoreRing = document.getElementById('score-ring');
const scorePercentage = document.getElementById('score-percentage');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const totalCount = document.getElementById('total-count');
const reviewBtn = document.getElementById('review-btn');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

// Review Screen Elements
const reviewBackBtn = document.getElementById('review-back-btn');
const reviewQuizTitle = document.getElementById('review-quiz-title');
const reviewList = document.getElementById('review-list');
const finishReviewBtn = document.getElementById('finish-review-btn');

// Initialize App
function init() {
    loadTheme();
    loadGlobalStats();
    setupEventListeners();
    updateGlobalAccuracy();
}

// Theme Management
function loadTheme() {
    const savedTheme = localStorage.getItem('quizTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('quizTheme', newTheme);
}

// Global Statistics
function loadGlobalStats() {
    const savedStats = localStorage.getItem('quizGlobalStats');
    if (savedStats) {
        globalStats = JSON.parse(savedStats);
    }
}

function saveGlobalStats() {
    localStorage.setItem('quizGlobalStats', JSON.stringify(globalStats));
}

function updateGlobalAccuracy() {
    if (globalStats.totalQuestions === 0) {
        globalAccuracy.textContent = '0%';
    } else {
        const accuracy = Math.round((globalStats.totalCorrect / globalStats.totalQuestions) * 100);
        globalAccuracy.textContent = `${accuracy}%`;
    }
}

// View Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// Quiz Functions
function startQuiz(categoryKey) {
    if (!quizDatabase[categoryKey]) return;
    
    currentState = {
        currentCategory: categoryKey,
        currentQuestionIndex: 0,
        userAnswers: [],
        quizCompleted: false,
        score: 0
    };
    
    const category = quizDatabase[categoryKey];
    quizTitle.textContent = category.title;
    totalQuestions.textContent = category.questions.length;
    
    populateJumpToSelect();
    loadQuestion();
    showScreen('quiz');
}

function populateJumpToSelect() {
    const category = quizDatabase[currentState.currentCategory];
    jumpToSelect.innerHTML = '<option value="">Jump to...</option>';
    
    category.questions.forEach((_, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Question ${index + 1}`;
        jumpToSelect.appendChild(option);
    });
}

function loadQuestion() {
    const category = quizDatabase[currentState.currentCategory];
    const question = category.questions[currentState.currentQuestionIndex];
    
    currentQuestionNum.textContent = currentState.currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    // Update progress bar
    const progress = ((currentState.currentQuestionIndex + 1) / category.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update jump to select
    jumpToSelect.value = currentState.currentQuestionIndex;
    
    // Render options
    optionsContainer.innerHTML = '';
    const optionLabels = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option-btn';
        button.dataset.index = index;
        button.innerHTML = `
            <span class="option-label">${optionLabels[index]}</span>
            <span class="option-text">${option}</span>
        `;
        
        // Check if this question was already answered
        if (currentState.userAnswers[currentState.currentQuestionIndex] !== undefined) {
            button.disabled = true;
            const userAnswer = currentState.userAnswers[currentState.currentQuestionIndex];
            
            if (index === question.correctAnswer) {
                button.classList.add('correct');
            } else if (index === userAnswer && userAnswer !== question.correctAnswer) {
                button.classList.add('incorrect');
            }
        }
        
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    // Hide explanation panel
    explanationPanel.classList.remove('show');
    
    // Update hint text
    if (currentState.userAnswers[currentState.currentQuestionIndex] !== undefined) {
        hintText.textContent = 'Answer submitted';
        nextBtn.disabled = false;
    } else {
        hintText.textContent = 'Select an answer to continue';
        nextBtn.disabled = true;
    }
}

function selectAnswer(selectedIndex) {
    const category = quizDatabase[currentState.currentCategory];
    const question = category.questions[currentState.currentQuestionIndex];
    
    // Store user's answer
    currentState.userAnswers[currentState.currentQuestionIndex] = selectedIndex;
    
    // Update button states
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((button, index) => {
        button.disabled = true;
        
        if (index === question.correctAnswer) {
            button.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correctAnswer) {
            button.classList.add('incorrect');
        }
    });
    
    // Show explanation
    explanationText.textContent = question.explanation;
    explanationPanel.classList.add('show');
    
    // Update hint text and enable next button
    hintText.textContent = selectedIndex === question.correctAnswer ? 'Correct!' : 'Incorrect';
    nextBtn.disabled = false;
}

function nextQuestion() {
    const category = quizDatabase[currentState.currentCategory];
    
    if (currentState.currentQuestionIndex < category.questions.length - 1) {
        currentState.currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function jumpToQuestion(index) {
    if (index === '') return;
    
    currentState.currentQuestionIndex = parseInt(index);
    loadQuestion();
}

function finishQuiz() {
    const category = quizDatabase[currentState.currentCategory];
    
    // Calculate score
    let correct = 0;
    currentState.userAnswers.forEach((answer, index) => {
        if (answer === category.questions[index].correctAnswer) {
            correct++;
        }
    });
    
    currentState.score = correct;
    currentState.quizCompleted = true;
    
    // Update global stats
    globalStats.totalQuizzes++;
    globalStats.totalCorrect += correct;
    globalStats.totalQuestions += category.questions.length;
    saveGlobalStats();
    updateGlobalAccuracy();
    
    // Display results
    displayResults(correct, category.questions.length);
    showScreen('results');
}

function displayResults(correct, total) {
    const percentage = Math.round((correct / total) * 100);
    
    // Update message based on score
    if (percentage >= 90) {
        resultsMessage.textContent = 'Excellent! You\'re a master!';
    } else if (percentage >= 70) {
        resultsMessage.textContent = 'Great job! Keep learning!';
    } else if (percentage >= 50) {
        resultsMessage.textContent = 'Good effort! Room for improvement.';
    } else {
        resultsMessage.textContent = 'Keep practicing! You\'ll get better.';
    }
    
    // Animate score circle
    const circumference = 2 * Math.PI * 60;
    const offset = circumference - (percentage / 100) * circumference;
    
    scoreRing.style.strokeDashoffset = circumference;
    setTimeout(() => {
        scoreRing.style.strokeDashoffset = offset;
    }, 100);
    
    scorePercentage.textContent = `${percentage}%`;
    correctCount.textContent = correct;
    incorrectCount.textContent = total - correct;
    totalCount.textContent = total;
}

// Review Functions
function showReview() {
    const category = quizDatabase[currentState.currentCategory];
    reviewQuizTitle.textContent = `${category.title} Review`;
    
    reviewList.innerHTML = '';
    
    category.questions.forEach((question, index) => {
        const userAnswer = currentState.userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const optionLabels = ['A', 'B', 'C', 'D'];
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <div class="review-question">Q${index + 1}: ${question.question}</div>
            <div class="review-answer">
                <span class="review-answer-label">Your Answer:</span>
                <span class="review-answer-value user-answer">${optionLabels[userAnswer]} - ${question.options[userAnswer]}</span>
            </div>
            <div class="review-answer">
                <span class="review-answer-label">Correct Answer:</span>
                <span class="review-answer-value correct-answer">${optionLabels[question.correctAnswer]} - ${question.options[question.correctAnswer]}</span>
            </div>
            <div class="review-explanation">${question.explanation}</div>
        `;
        
        reviewList.appendChild(reviewItem);
    });
    
    showScreen('review');
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            startQuiz(category);
        });
    });
    
    // Quiz navigation
    quitBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
            showScreen('home');
        }
    });
    
    jumpToSelect.addEventListener('change', (e) => {
        jumpToQuestion(e.target.value);
    });
    
    nextBtn.addEventListener('click', nextQuestion);
    
    // Results screen buttons
    reviewBtn.addEventListener('click', showReview);
    retryBtn.addEventListener('click', () => {
        startQuiz(currentState.currentCategory);
    });
    homeBtn.addEventListener('click', () => {
        showScreen('home');
    });
    
    // Review screen buttons
    reviewBackBtn.addEventListener('click', () => {
        showScreen('results');
    });
    
    finishReviewBtn.addEventListener('click', () => {
        showScreen('results');
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
