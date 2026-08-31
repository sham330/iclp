import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const redirectMap = {
  "machine learning with python": "/course/machine-learning-using-python-training-in-chennai/",
  "machine learning": "/course/machine-learning-using-python-training-in-chennai/",
  "manual testing course": "/course/manual-testing-course-online/",
  "wordpress": "/course/wordpress/",
  "azure devops": "/course/azure-devops-training/",
  "javascript": "/course/java-script-online-training/",
  "angular": "/course/angular-developer-online-training/",
  "sql with php": "/course/sql-with-php-training-in-chennai/",
  "salesforce developer": "/course/salesforce-online-training/",
  "java": "/course/java-online-training/",
  "artificial intelligence": "/course/artificial-intelligence-course-online/",
  "unix shell scripting": "/course/unix-shell-scripting-online-training/",
  "ethical hacking": "/course/ethical-hacking--online-training/",
  "microsoft dynamics 365": "/course/microsoft-dynamics-training-in-chennai/",
  "jmeter course": "/course/j-meter-course-online/",
  "ui and ux": "/course/ui-and-ux-online-training/",
  "excel macros and vba": "/course/excel-macros-and-vba-training-in-chennai/",
  "machine learning using r": "/course/r-programming-online-training/",
  "data science course": "/course/data-science-course-online/",
  "etl testing": "/course/etl-testing-online-training/",
  "soapui": "/course/soap-ui-online-training/",
  "cyber security": "/course/cyber-security-online-training/",
  "c sharp": "/course/c-sharp-training-in-chennai/",
  "digital marketing": "/course/digital-marketing-online-training/",
  "python": "/course/python-development-online-training/",
  "css online": "/course/css-training-in-chennai/",
  "data science with python": "/course/data-science-with-python-training/",
  "salesforce": "/course/salesforce-online-training/",
  "microsoft excel": "/course/microsoft-excel-online-training/",
  "selenium": "/course/selenium-training-online/",
  "workday hcm": "/course/workday-hcm-online-course/",
  "mysql": "/course/msql-online-training/",
  "html": "/course/html-developer-online-training/",
  "aws": "/course/aws-devops-training/",
};

export default async function CourseDetailsRedirectPage({ params }) {
  const resolvedParams = await params;
  const courseKey = decodeURIComponent(resolvedParams?.path || "").toLowerCase();

  if (redirectMap[courseKey]) redirect(redirectMap[courseKey]);

  redirect("/courses/");
}
