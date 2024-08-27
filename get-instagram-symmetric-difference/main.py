import sys
import os
from bs4 import BeautifulSoup


def get_username_set(markup):
    bs = BeautifulSoup(markup, "lxml")
    account_list = bs.find(class_="_a706")
    if not account_list:
        raise Exception("unable to find account list")
    account_anchors = account_list.find_all("a")
    usernames = []
    for anchor in account_anchors:
        usernames.append(anchor.text)
    return set(usernames)


def get_markup(file_path):
    file = open(file_path, "r")
    return file.read()


def main():
    if len(sys.argv) == 1:
        raise Exception("requires instagram data directory path")
    dir_path = sys.argv[1]
    followers_and_following_relative_path = os.path.join("connections", "followers_and_following")
    following_set = get_username_set(get_markup(os.path.join(
        dir_path,
        followers_and_following_relative_path,
        "following.html"
    )))
    follower_set = get_username_set(get_markup(os.path.join(
        dir_path,
        followers_and_following_relative_path,
        "followers_1.html"
    )))
    result_set = following_set.symmetric_difference(follower_set)
    print(f"found {len(result_set)} difference(s)\n")
    for username in result_set:
        print(username)


main()
