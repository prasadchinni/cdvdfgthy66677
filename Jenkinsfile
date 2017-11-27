pipeline {
  agent any
  stages {
    stage('Test') {
      agent any
      environment {
        KUBE_URL = 'credentials(\'KUBE_URL\')'
      }
      steps {
        sh 'ehco $KUBE_URL'
      }
    }
  }
  environment {
    KUBE_URL = 'credentials(\'KUBE_URL\')'
  }
}