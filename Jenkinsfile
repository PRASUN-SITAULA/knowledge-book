pipeline{
    // for production environment use a dedicated agent for running tasks
    agent any

    stages{
        stage("Git Checkout"){
            steps{
                git branch 'main',
                    url: "https://github.com/PRASUN-SITAULA/knowledge-book.git"
            }
        }

        stage("Install Dependencies"){
            steps{
                sh 'npm install'
            }
        }

        stage("Lint"){
            steps{
                sh 'npm lint'
            }
        }
    }

    post{
        always{
            echo "Pipeline finished"
        }
        sucess{
            echo "Pipeline completed successfully"
        }
        failure{
            echo "Pipeline failed"
        }
    }
}
