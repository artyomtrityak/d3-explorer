module.exports = () => ({
  nodes: [
    {
      id: "App1",
      type: "application"
    },

    {
      id: "Service1",
      type: "microservice"
    },
    {
      id: "Service2",
      type: "microservice"
    },
    {
      id: "Service3",
      type: "microservice"
    },
    {
      id: "Service11",
      type: "microservice"
    },
    {
      id: "Service21",
      type: "microservice"
    },

    //DEV
    {
      id: "DEV-ENV",
      type: "environment"
    },
    {
      id: "DEV-K8Cluster",
      type: "K8Cluster"
    },
    {
      id: "DEV-K8Service1",
      type: "K8Service"
    },
    {
      id: "DEV-K8Service1-Pod1",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service1-Pod2",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service1-Pod3",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service1-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service1-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service1-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service1-Pod2-Container2",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service1-Pod3-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service1-Pod3-Container2",
      type: "K8Container"
    },

    {
      id: "DEV-K8Service2",
      type: "K8Service"
    },
    {
      id: "DEV-K8Service2-Pod1",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service2-Pod2",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service2-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service2-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service2-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service2-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "DEV-K8Service3",
      type: "K8Service"
    },
    {
      id: "DEV-K8Service3-Pod1",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service3-Pod2",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service3-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service3-Pod2-Container1",
      type: "K8Container"
    },

    {
      id: "DEV-K8Service11",
      type: "K8Service"
    },
    {
      id: "DEV-K8Service11-Pod1",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service11-Pod2",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service11-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service11-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service11-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service11-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "DEV-K8Service21",
      type: "K8Service"
    },
    {
      id: "DEV-K8Service21-Pod1",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service21-Pod2",
      type: "K8Pod"
    },
    {
      id: "DEV-K8Service21-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service21-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service21-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "DEV-K8Service21-Pod2-Container2",
      type: "K8Container"
    },


    //QA
    {
      id: "QA-ENV",
      type: "environment"
    },
    {
      id: "QA-K8Cluster",
      type: "K8Cluster"
    },
    {
      id: "QA-K8Service1",
      type: "K8Service"
    },
    {
      id: "QA-K8Service1-Pod1",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service1-Pod2",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service1-Pod3",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service1-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service1-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "QA-K8Service1-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service1-Pod2-Container2",
      type: "K8Container"
    },
    {
      id: "QA-K8Service1-Pod3-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service1-Pod3-Container2",
      type: "K8Container"
    },

    {
      id: "QA-K8Service2",
      type: "K8Service"
    },
    {
      id: "QA-K8Service2-Pod1",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service2-Pod2",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service2-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service2-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "QA-K8Service2-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service2-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "QA-K8Service3",
      type: "K8Service"
    },
    {
      id: "QA-K8Service3-Pod1",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service3-Pod2",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service3-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service3-Pod2-Container1",
      type: "K8Container"
    },

    {
      id: "QA-K8Service11",
      type: "K8Service"
    },
    {
      id: "QA-K8Service11-Pod1",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service11-Pod2",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service11-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service11-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "QA-K8Service11-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service11-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "QA-K8Service21",
      type: "K8Service"
    },
    {
      id: "QA-K8Service21-Pod1",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service21-Pod2",
      type: "K8Pod"
    },
    {
      id: "QA-K8Service21-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service21-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "QA-K8Service21-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "QA-K8Service21-Pod2-Container2",
      type: "K8Container"
    },



    //STAGING
    {
      id: "STAGING-ENV",
      type: "environment"
    },
    {
      id: "STAGING-K8Cluster",
      type: "K8Cluster"
    },
    {
      id: "STAGING-K8Service1",
      type: "K8Service"
    },
    {
      id: "STAGING-K8Service1-Pod1",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service1-Pod2",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service1-Pod3",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service1-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service1-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service1-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service1-Pod2-Container2",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service1-Pod3-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service1-Pod3-Container2",
      type: "K8Container"
    },

    {
      id: "STAGING-K8Service2",
      type: "K8Service"
    },
    {
      id: "STAGING-K8Service2-Pod1",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service2-Pod2",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service2-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service2-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service2-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service2-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "STAGING-K8Service3",
      type: "K8Service"
    },
    {
      id: "STAGING-K8Service3-Pod1",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service3-Pod2",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service3-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service3-Pod2-Container1",
      type: "K8Container"
    },

    {
      id: "STAGING-K8Service11",
      type: "K8Service"
    },
    {
      id: "STAGING-K8Service11-Pod1",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service11-Pod2",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service11-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service11-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service11-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service11-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "STAGING-K8Service21",
      type: "K8Service"
    },
    {
      id: "STAGING-K8Service21-Pod1",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service21-Pod2",
      type: "K8Pod"
    },
    {
      id: "STAGING-K8Service21-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service21-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service21-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "STAGING-K8Service21-Pod2-Container2",
      type: "K8Container"
    },


    {
      id: "PROD-ENV",
      type: "environment"
    },
    {
      id: "PROD-K8Cluster",
      type: "K8Cluster"
    },
    {
      id: "PROD-K8Service1",
      type: "K8Service"
    },
    {
      id: "PROD-K8Service1-Pod1",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service1-Pod2",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service1-Pod3",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service1-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service1-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service1-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service1-Pod2-Container2",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service1-Pod3-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service1-Pod3-Container2",
      type: "K8Container"
    },

    {
      id: "PROD-K8Service2",
      type: "K8Service"
    },
    {
      id: "PROD-K8Service2-Pod1",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service2-Pod2",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service2-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service2-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service2-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service2-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "PROD-K8Service3",
      type: "K8Service"
    },
    {
      id: "PROD-K8Service3-Pod1",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service3-Pod2",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service3-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service3-Pod2-Container1",
      type: "K8Container"
    },

    {
      id: "PROD-K8Service11",
      type: "K8Service"
    },
    {
      id: "PROD-K8Service11-Pod1",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service11-Pod2",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service11-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service11-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service11-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service11-Pod2-Container2",
      type: "K8Container"
    },

    {
      id: "PROD-K8Service21",
      type: "K8Service"
    },
    {
      id: "PROD-K8Service21-Pod1",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service21-Pod2",
      type: "K8Pod"
    },
    {
      id: "PROD-K8Service21-Pod1-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service21-Pod1-Container2",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service21-Pod2-Container1",
      type: "K8Container"
    },
    {
      id: "PROD-K8Service21-Pod2-Container2",
      type: "K8Container"
    }
  ],
  links: [
    {
      source: "App1",
      target: "Service1"
    },
    {
      source: "App1",
      target: "Service2"
    },
    {
      source: "App1",
      target: "Service3"
    },
    {
      source: "App1",
      target: "DEV-ENV"
    },
    {
      source: "App1",
      target: "PROD-ENV"
    },
    {
      source: "Service1",
      target: "Service11"
    },
    {
      source: "Service2",
      target: "Service21"
    },

    //DEV
    {
      source: "DEV-ENV",
      target: "DEV-K8Cluster"
    },
    {
      source: "Service1",
      target: "DEV-ENV"
    },
    {
      source: "Service2",
      target: "DEV-ENV"
    },
    {
      source: "Service3",
      target: "DEV-ENV"
    },
    {
      source: "Service11",
      target: "DEV-ENV"
    },
    {
      source: "Service21",
      target: "DEV-ENV"
    },
    {
      source: "DEV-K8Cluster",
      target: "DEV-K8Service1"
    },
    {
      source: "DEV-K8Cluster",
      target: "DEV-K8Service2"
    },
    {
      source: "DEV-K8Cluster",
      target: "DEV-K8Service3"
    },
    {
      source: "DEV-K8Cluster",
      target: "DEV-K8Service11"
    },
    {
      source: "DEV-K8Cluster",
      target: "DEV-K8Service21"
    },
    {
      source: "DEV-K8Service1",
      target: "DEV-K8Service1-Pod1"
    },
    {
      source: "DEV-K8Service1",
      target: "DEV-K8Service1-Pod2"
    },
    {
      source: "DEV-K8Service1",
      target: "DEV-K8Service1-Pod3"
    },
    {
      source: "DEV-K8Service1-Pod1",
      target: "DEV-K8Service1-Pod1-Container1"
    },
    {
      source: "DEV-K8Service1-Pod1",
      target: "DEV-K8Service1-Pod1-Container2"
    },
    {
      source: "DEV-K8Service1-Pod2",
      target: "DEV-K8Service1-Pod2-Container1"
    },
    {
      source: "DEV-K8Service1-Pod2",
      target: "DEV-K8Service1-Pod2-Container2"
    },
    {
      source: "DEV-K8Service1-Pod3",
      target: "DEV-K8Service1-Pod3-Container1"
    },
    {
      source: "DEV-K8Service1-Pod3",
      target: "DEV-K8Service1-Pod3-Container2"
    },

    {
      source: "DEV-K8Service2",
      target: "DEV-K8Service2-Pod1"
    },
    {
      source: "DEV-K8Service2",
      target: "DEV-K8Service2-Pod2"
    },
    {
      source: "DEV-K8Service2-Pod1",
      target: "DEV-K8Service2-Pod1-Container1"
    },
    {
      source: "DEV-K8Service2-Pod1",
      target: "DEV-K8Service2-Pod1-Container2"
    },
    {
      source: "DEV-K8Service2-Pod2",
      target: "DEV-K8Service2-Pod2-Container1"
    },
    {
      source: "DEV-K8Service2-Pod2",
      target: "DEV-K8Service2-Pod2-Container2"
    },

    {
      source: "DEV-K8Service3",
      target: "DEV-K8Service3-Pod1"
    },
    {
      source: "DEV-K8Service3",
      target: "DEV-K8Service3-Pod2"
    },
    {
      source: "DEV-K8Service3-Pod1",
      target: "DEV-K8Service3-Pod1-Container1"
    },
    {
      source: "DEV-K8Service3-Pod2",
      target: "DEV-K8Service3-Pod2-Container1"
    },

    {
      source: "DEV-K8Service11",
      target: "DEV-K8Service11-Pod1"
    },
    {
      source: "DEV-K8Service11",
      target: "DEV-K8Service11-Pod2"
    },
    {
      source: "DEV-K8Service11-Pod1",
      target: "DEV-K8Service11-Pod1-Container1"
    },
    {
      source: "DEV-K8Service11-Pod1",
      target: "DEV-K8Service11-Pod1-Container2"
    },
    {
      source: "DEV-K8Service11-Pod2",
      target: "DEV-K8Service11-Pod2-Container1"
    },
    {
      source: "DEV-K8Service11-Pod2",
      target: "DEV-K8Service11-Pod2-Container2"
    },

    {
      source: "DEV-K8Service21",
      target: "DEV-K8Service21-Pod1"
    },
    {
      source: "DEV-K8Service21",
      target: "DEV-K8Service21-Pod2"
    },
    {
      source: "DEV-K8Service21-Pod1",
      target: "DEV-K8Service21-Pod1-Container1"
    },
    {
      source: "DEV-K8Service21-Pod1",
      target: "DEV-K8Service21-Pod1-Container2"
    },
    {
      source: "DEV-K8Service21-Pod2",
      target: "DEV-K8Service21-Pod2-Container1"
    },
    {
      source: "DEV-K8Service21-Pod2",
      target: "DEV-K8Service21-Pod2-Container2"
    },

    //QA

    {
      source: "QA-ENV",
      target: "QA-K8Cluster"
    },
    {
      source: "Service1",
      target: "QA-ENV"
    },
    {
      source: "Service2",
      target: "QA-ENV"
    },
    {
      source: "Service3",
      target: "QA-ENV"
    },
    {
      source: "Service11",
      target: "QA-ENV"
    },
    {
      source: "Service21",
      target: "QA-ENV"
    },
    {
      source: "QA-K8Cluster",
      target: "QA-K8Service1"
    },
    {
      source: "QA-K8Cluster",
      target: "QA-K8Service2"
    },
    {
      source: "QA-K8Cluster",
      target: "QA-K8Service3"
    },
    {
      source: "QA-K8Cluster",
      target: "QA-K8Service11"
    },
    {
      source: "QA-K8Cluster",
      target: "QA-K8Service21"
    },
    {
      source: "QA-K8Service1",
      target: "QA-K8Service1-Pod1"
    },
    {
      source: "QA-K8Service1",
      target: "QA-K8Service1-Pod2"
    },
    {
      source: "QA-K8Service1",
      target: "QA-K8Service1-Pod3"
    },
    {
      source: "QA-K8Service1-Pod1",
      target: "QA-K8Service1-Pod1-Container1"
    },
    {
      source: "QA-K8Service1-Pod1",
      target: "QA-K8Service1-Pod1-Container2"
    },
    {
      source: "QA-K8Service1-Pod2",
      target: "QA-K8Service1-Pod2-Container1"
    },
    {
      source: "QA-K8Service1-Pod2",
      target: "QA-K8Service1-Pod2-Container2"
    },
    {
      source: "QA-K8Service1-Pod3",
      target: "QA-K8Service1-Pod3-Container1"
    },
    {
      source: "QA-K8Service1-Pod3",
      target: "QA-K8Service1-Pod3-Container2"
    },

    {
      source: "QA-K8Service2",
      target: "QA-K8Service2-Pod1"
    },
    {
      source: "QA-K8Service2",
      target: "QA-K8Service2-Pod2"
    },
    {
      source: "QA-K8Service2-Pod1",
      target: "QA-K8Service2-Pod1-Container1"
    },
    {
      source: "QA-K8Service2-Pod1",
      target: "QA-K8Service2-Pod1-Container2"
    },
    {
      source: "QA-K8Service2-Pod2",
      target: "QA-K8Service2-Pod2-Container1"
    },
    {
      source: "QA-K8Service2-Pod2",
      target: "QA-K8Service2-Pod2-Container2"
    },

    {
      source: "QA-K8Service3",
      target: "QA-K8Service3-Pod1"
    },
    {
      source: "QA-K8Service3",
      target: "QA-K8Service3-Pod2"
    },
    {
      source: "QA-K8Service3-Pod1",
      target: "QA-K8Service3-Pod1-Container1"
    },
    {
      source: "QA-K8Service3-Pod2",
      target: "QA-K8Service3-Pod2-Container1"
    },

    {
      source: "QA-K8Service11",
      target: "QA-K8Service11-Pod1"
    },
    {
      source: "QA-K8Service11",
      target: "QA-K8Service11-Pod2"
    },
    {
      source: "QA-K8Service11-Pod1",
      target: "QA-K8Service11-Pod1-Container1"
    },
    {
      source: "QA-K8Service11-Pod1",
      target: "QA-K8Service11-Pod1-Container2"
    },
    {
      source: "QA-K8Service11-Pod2",
      target: "QA-K8Service11-Pod2-Container1"
    },
    {
      source: "QA-K8Service11-Pod2",
      target: "QA-K8Service11-Pod2-Container2"
    },

    {
      source: "QA-K8Service21",
      target: "QA-K8Service21-Pod1"
    },
    {
      source: "QA-K8Service21",
      target: "QA-K8Service21-Pod2"
    },
    {
      source: "QA-K8Service21-Pod1",
      target: "QA-K8Service21-Pod1-Container1"
    },
    {
      source: "QA-K8Service21-Pod1",
      target: "QA-K8Service21-Pod1-Container2"
    },
    {
      source: "QA-K8Service21-Pod2",
      target: "QA-K8Service21-Pod2-Container1"
    },
    {
      source: "QA-K8Service21-Pod2",
      target: "QA-K8Service21-Pod2-Container2"
    },

    //STAGING

    {
      source: "STAGING-ENV",
      target: "STAGING-K8Cluster"
    },
    {
      source: "Service1",
      target: "STAGING-ENV"
    },
    {
      source: "Service2",
      target: "STAGING-ENV"
    },
    {
      source: "Service3",
      target: "STAGING-ENV"
    },
    {
      source: "Service11",
      target: "STAGING-ENV"
    },
    {
      source: "Service21",
      target: "STAGING-ENV"
    },
    {
      source: "STAGING-K8Cluster",
      target: "STAGING-K8Service1"
    },
    {
      source: "STAGING-K8Cluster",
      target: "STAGING-K8Service2"
    },
    {
      source: "STAGING-K8Cluster",
      target: "STAGING-K8Service3"
    },
    {
      source: "STAGING-K8Cluster",
      target: "STAGING-K8Service11"
    },
    {
      source: "STAGING-K8Cluster",
      target: "STAGING-K8Service21"
    },
    {
      source: "STAGING-K8Service1",
      target: "STAGING-K8Service1-Pod1"
    },
    {
      source: "STAGING-K8Service1",
      target: "STAGING-K8Service1-Pod2"
    },
    {
      source: "STAGING-K8Service1",
      target: "STAGING-K8Service1-Pod3"
    },
    {
      source: "STAGING-K8Service1-Pod1",
      target: "STAGING-K8Service1-Pod1-Container1"
    },
    {
      source: "STAGING-K8Service1-Pod1",
      target: "STAGING-K8Service1-Pod1-Container2"
    },
    {
      source: "STAGING-K8Service1-Pod2",
      target: "STAGING-K8Service1-Pod2-Container1"
    },
    {
      source: "STAGING-K8Service1-Pod2",
      target: "STAGING-K8Service1-Pod2-Container2"
    },
    {
      source: "STAGING-K8Service1-Pod3",
      target: "STAGING-K8Service1-Pod3-Container1"
    },
    {
      source: "STAGING-K8Service1-Pod3",
      target: "STAGING-K8Service1-Pod3-Container2"
    },

    {
      source: "STAGING-K8Service2",
      target: "STAGING-K8Service2-Pod1"
    },
    {
      source: "STAGING-K8Service2",
      target: "STAGING-K8Service2-Pod2"
    },
    {
      source: "STAGING-K8Service2-Pod1",
      target: "STAGING-K8Service2-Pod1-Container1"
    },
    {
      source: "STAGING-K8Service2-Pod1",
      target: "STAGING-K8Service2-Pod1-Container2"
    },
    {
      source: "STAGING-K8Service2-Pod2",
      target: "STAGING-K8Service2-Pod2-Container1"
    },
    {
      source: "STAGING-K8Service2-Pod2",
      target: "STAGING-K8Service2-Pod2-Container2"
    },

    {
      source: "STAGING-K8Service3",
      target: "STAGING-K8Service3-Pod1"
    },
    {
      source: "STAGING-K8Service3",
      target: "STAGING-K8Service3-Pod2"
    },
    {
      source: "STAGING-K8Service3-Pod1",
      target: "STAGING-K8Service3-Pod1-Container1"
    },
    {
      source: "STAGING-K8Service3-Pod2",
      target: "STAGING-K8Service3-Pod2-Container1"
    },

    {
      source: "STAGING-K8Service11",
      target: "STAGING-K8Service11-Pod1"
    },
    {
      source: "STAGING-K8Service11",
      target: "STAGING-K8Service11-Pod2"
    },
    {
      source: "STAGING-K8Service11-Pod1",
      target: "STAGING-K8Service11-Pod1-Container1"
    },
    {
      source: "STAGING-K8Service11-Pod1",
      target: "STAGING-K8Service11-Pod1-Container2"
    },
    {
      source: "STAGING-K8Service11-Pod2",
      target: "STAGING-K8Service11-Pod2-Container1"
    },
    {
      source: "STAGING-K8Service11-Pod2",
      target: "STAGING-K8Service11-Pod2-Container2"
    },

    {
      source: "STAGING-K8Service21",
      target: "STAGING-K8Service21-Pod1"
    },
    {
      source: "STAGING-K8Service21",
      target: "STAGING-K8Service21-Pod2"
    },
    {
      source: "STAGING-K8Service21-Pod1",
      target: "STAGING-K8Service21-Pod1-Container1"
    },
    {
      source: "STAGING-K8Service21-Pod1",
      target: "STAGING-K8Service21-Pod1-Container2"
    },
    {
      source: "STAGING-K8Service21-Pod2",
      target: "STAGING-K8Service21-Pod2-Container1"
    },
    {
      source: "STAGING-K8Service21-Pod2",
      target: "STAGING-K8Service21-Pod2-Container2"
    },


    //PROD

    {
      source: "PROD-ENV",
      target: "PROD-K8Cluster"
    },
    {
      source: "Service1",
      target: "PROD-ENV"
    },
    {
      source: "Service2",
      target: "PROD-ENV"
    },
    {
      source: "Service3",
      target: "PROD-ENV"
    },
    {
      source: "Service11",
      target: "PROD-ENV"
    },
    {
      source: "Service21",
      target: "PROD-ENV"
    },
    {
      source: "PROD-K8Cluster",
      target: "PROD-K8Service1"
    },
    {
      source: "PROD-K8Cluster",
      target: "PROD-K8Service2"
    },
    {
      source: "PROD-K8Cluster",
      target: "PROD-K8Service3"
    },
    {
      source: "PROD-K8Cluster",
      target: "PROD-K8Service11"
    },
    {
      source: "PROD-K8Cluster",
      target: "PROD-K8Service21"
    },
    {
      source: "PROD-K8Service1",
      target: "PROD-K8Service1-Pod1"
    },
    {
      source: "PROD-K8Service1",
      target: "PROD-K8Service1-Pod2"
    },
    {
      source: "PROD-K8Service1",
      target: "PROD-K8Service1-Pod3"
    },
    {
      source: "PROD-K8Service1-Pod1",
      target: "PROD-K8Service1-Pod1-Container1"
    },
    {
      source: "PROD-K8Service1-Pod1",
      target: "PROD-K8Service1-Pod1-Container2"
    },
    {
      source: "PROD-K8Service1-Pod2",
      target: "PROD-K8Service1-Pod2-Container1"
    },
    {
      source: "PROD-K8Service1-Pod2",
      target: "PROD-K8Service1-Pod2-Container2"
    },
    {
      source: "PROD-K8Service1-Pod3",
      target: "PROD-K8Service1-Pod3-Container1"
    },
    {
      source: "PROD-K8Service1-Pod3",
      target: "PROD-K8Service1-Pod3-Container2"
    },

    {
      source: "PROD-K8Service2",
      target: "PROD-K8Service2-Pod1"
    },
    {
      source: "PROD-K8Service2",
      target: "PROD-K8Service2-Pod2"
    },
    {
      source: "PROD-K8Service2-Pod1",
      target: "PROD-K8Service2-Pod1-Container1"
    },
    {
      source: "PROD-K8Service2-Pod1",
      target: "PROD-K8Service2-Pod1-Container2"
    },
    {
      source: "PROD-K8Service2-Pod2",
      target: "PROD-K8Service2-Pod2-Container1"
    },
    {
      source: "PROD-K8Service2-Pod2",
      target: "PROD-K8Service2-Pod2-Container2"
    },

    {
      source: "PROD-K8Service3",
      target: "PROD-K8Service3-Pod1"
    },
    {
      source: "PROD-K8Service3",
      target: "PROD-K8Service3-Pod2"
    },
    {
      source: "PROD-K8Service3-Pod1",
      target: "PROD-K8Service3-Pod1-Container1"
    },
    {
      source: "PROD-K8Service3-Pod2",
      target: "PROD-K8Service3-Pod2-Container1"
    },

    {
      source: "PROD-K8Service11",
      target: "PROD-K8Service11-Pod1"
    },
    {
      source: "PROD-K8Service11",
      target: "PROD-K8Service11-Pod2"
    },
    {
      source: "PROD-K8Service11-Pod1",
      target: "PROD-K8Service11-Pod1-Container1"
    },
    {
      source: "PROD-K8Service11-Pod1",
      target: "PROD-K8Service11-Pod1-Container2"
    },
    {
      source: "PROD-K8Service11-Pod2",
      target: "PROD-K8Service11-Pod2-Container1"
    },
    {
      source: "PROD-K8Service11-Pod2",
      target: "PROD-K8Service11-Pod2-Container2"
    },

    {
      source: "PROD-K8Service21",
      target: "PROD-K8Service21-Pod1"
    },
    {
      source: "PROD-K8Service21",
      target: "PROD-K8Service21-Pod2"
    },
    {
      source: "PROD-K8Service21-Pod1",
      target: "PROD-K8Service21-Pod1-Container1"
    },
    {
      source: "PROD-K8Service21-Pod1",
      target: "PROD-K8Service21-Pod1-Container2"
    },
    {
      source: "PROD-K8Service21-Pod2",
      target: "PROD-K8Service21-Pod2-Container1"
    },
    {
      source: "PROD-K8Service21-Pod2",
      target: "PROD-K8Service21-Pod2-Container2"
    }
  ]
});
