pipeline{
    // for production environment use a dedicated agent for running tasks
    agent any

    tools {
        NodeJS "nodejs"
    }

    stages{
        stage("Git Checkout"){
            steps{
                git branch: 'main',
                    url: "https://github.com/PRASUN-SITAULA/knowledge-book.git",
                    credentialsId: 'GITHUB_TOKEN'
            }
        }

        stage("Install Dependencies"){
            steps{
                node("nodejs"){
                    sh 'npm install'
                }
            }
        }

        stage("Lint"){
            steps{
                node("nodejs"){
                    sh 'npm run lint'
                }
            }
        }
    }

    post{
        always{
            echo "Pipeline finished"
        }
        success{
            echo "Pipeline completed successfully"
        }
        failure{
            echo "Pipeline failed"
        }
    }
}
