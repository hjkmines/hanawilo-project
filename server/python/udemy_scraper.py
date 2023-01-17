# %%
import pandas as pd
import undetected_chromedriver as uc
from bs4 import BeautifulSoup 
from time import sleep
from datetime import date

# %%
# Uses undetected_chromedriver to bypass cloudflare and get source from dynamic content
options = uc.ChromeOptions() 
options.headless = True 
driver = uc.Chrome(use_subprocess=True, options=options) 

# %%
# Dataframe
columns = ['Course Title', 'Course Headline',  'Rating', 'Reviews', 'Course Length', 'Lectures', 'Level', 'Instructor' ]
df=pd.DataFrame(columns=columns)

# %%
# Data extractor
def scrapeCourses(courses):
    rows = []
    for course in courses:
        row = []

        try:
            course_info = course.find('div',class_="course-card--main-content--2XqiY")
        except:
            course_info = None
            continue

        try:         
            course_title=course_info.find("div", class_="ud-sr-only").previousSibling.text
        except: course_title=None

        try:
            course_head=course_info.find("span",{'data-purpose':'seo-headline'}).text
        except:
            course_head = None

        try:
            course_rating=course_info.find("span",{'data-purpose':'seo-rating'}).text
        except:
            course_rating = None

        try:
            course_reviews=course_info.find("span",{'data-purpose':'seo-num-reviews'}).text
        except:
            course_reviews = None

        try:
            course_hours=course_info.find("span",{'data-purpose':'seo-content-info'}).text
        except:
            course_hours=None

        try: 
            course_lectures = course_info.find("span",{'data-purpose':'seo-num-lectures'}).text
        except: 
            course_lectures= None
        try:
            course_level = course_info.find("span",{'data-purpose':'seo-instructional-level'}).text
        except: course_level= None

        try:
            course_instructor=course_info.find("div",{'data-purpose':"safely-set-inner-html:course-card:visible-instructors"}).text
        except:
            course_instructor= None

        row = [course_title, course_head, course_rating, course_reviews, course_hours, course_lectures, course_level, course_instructor]
        rows.append(row)
        
    return rows
    

# %%
# Params
queries = ['programming']
page_limit= 50 

# %%
# Driver
for query in queries:
    for page in range(1,page_limit+1):
        driver.get(f'https://www.udemy.com/courses/search/?p={page}&q={query}&src=ukw')
        #driver.get("https://www.udemy.com/topic/javascript/")
        sleep(5)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        courses_list = soup.find('div', {'class': 'course-list--container--3zXPS'})
        courses = courses_list.find_all('div', {'class': 'course-card--container--1QM2W'})
        rows = scrapeCourses(courses)
        tempdf = pd.DataFrame(rows,columns=columns)
        df=pd.concat([df,tempdf], ignore_index=True)

driver.close()

# %%
df

# %%
# Output
df.to_csv(f'output/udemy_courses_{query}_{date.today()}.csv')
df.to_json(f'output/udemy_courses_{query}_{date.today()}.json')


